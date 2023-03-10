import { Router } from "express";
import db from "./db";
import logger from "./utils/logger";
import jsonwebtoken from "jsonwebtoken";
import auth from "./utils/auth";
import "dotenv/config";
import bcrypt from "bcrypt";
const generateUniqueId = require("generate-unique-id");

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.post("/users", async (req, res) => {
try {
	const id = generateUniqueId({
		length: 6,
		useLetters: false,
	});
	const { full_name, email, password, role } = req.body;

	const hash = await bcrypt.hash(JSON.stringify(password), 10);

	
	console.log(hash);
	
	const user = await db.query(
		"INSERT INTO users (user_id, full_name, email, password, role) VALUES ($1, $2, $3, $4, $5) ", [id,full_name, email, hash, role]
	)
	res.status(201).json(user.rows[0]);
} catch (error) {
	console.error(error);
}
})
router.post("/auth/login", async (req, res) => {
	try {
		const JWT_SECRET = process.env.JWT_SECRET;
		const { email, password } = req.body;
		
		
		const user = await db.query("SELECT * FROM users WHERE email = $1", [
			email,
		]);
		console.log(user.rows[0], email, password);
		const isValid = await bcrypt.compare(password, user.rows[0].password);
		
		console.log(password)
		console.log(isValid)
		if (!isValid) {
			res.status(401).json({ message: "Invalid credentials" });
			return;
		} 
		if (isValid && email === user.rows[0].email) {
			res.json({
				userId: user.rows[0].user_id,
				role: user.rows[0].role,
				token: jsonwebtoken.sign({ user: user.rows[0].user_id }, JWT_SECRET, {
					expiresIn: "1800s",
				}),
			});
		}
	} catch (error) {
		console.log(error);
	}
});

router.get("/users/:id", auth, async (req, res) => {
	try {
		const userId = req.params.id;

		let user = await db.query("SELECT * FROM users WHERE user_id = $1", [
			userId,
		]);
		if (user.rows[0].role === "student") {
			user = await db.query(
				"SELECT u.*, sm.mentor_type, us.full_name  AS mentor_name FROM users u FULL OUTER JOIN student_mentor sm  ON (u.user_id = sm.student_id) FULL OUTER JOIN users us ON (us.user_id = sm.mentor_id) WHERE u.user_id = $1",
				[userId]
			);
		}
		if (user.rows[0].role === "mentor") {
			user = await db.query(
				"SELECT us.full_name AS student_name, us.user_id AS student_id, us.img_url AS student_avatar, u.*, sm.mentor_type  FROM users u FULL OUTER JOIN student_mentor sm  ON (u.user_id = sm.mentor_id) FULL OUTER JOIN users us ON (us.user_id = sm.student_id) WHERE u.user_id = $1",
				[userId]
			);
		}
		return res.json(user.rows);
	} catch (error) {
		console.log(error);
	}
});

router.put("/users/:id", auth, async (req, res) => {
	try {
		const userId = parseInt(req.params.id);

		const user = await db.query("SELECT * FROM users WHERE user_id = $1", [
			userId,
		]);
		const userData = user.rows[0];
		if (!userData) {
			res.status(404).json({ message: "User not found" });
		}
		const {
			password = userData.password,
			img_url = userData.img_url,
			bio = userData.bio,
		} = req.body;

		await db.query(
			"UPDATE users SET password = $1, img_url = $2, bio = $3 WHERE user_id = $4",
			[password, img_url, bio, userId]
		);
		res.json({ message: "User updated" });
	} catch (error) {
		console.error(error);
	}
});

// Get all modules
router.get("/modules", async (req, res) => {
	try {
		let modules = await db.query("SELECT * FROM modules");
		return res.json(modules.rows);
	} catch (error) {
		console.log(error);
	}
});
export default router;
