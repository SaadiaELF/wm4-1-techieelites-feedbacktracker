import { Router } from "express";
import db from "./db";
import logger from "./utils/logger";
import jsonwebtoken from "jsonwebtoken";
import auth from "./utils/auth";
import "dotenv/config";
const generateUniqueId = require("generate-unique-id");

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.post("/auth/login", async (req, res) => {
	try {
		const JWT_SECRET = process.env.JWT_SECRET;
		const { email, password } = req.body;
		const user = await db.query("SELECT * FROM users WHERE email = $1", [
			email,
		]);
		if (email === user.rows[0].email && password === user.rows[0].password) {
			return res.json({
				userId: user.rows[0].user_id,
				role: user.rows[0].role,
				token: jsonwebtoken.sign({ user: user.rows[0].user_id }, JWT_SECRET, {
					expiresIn: "1800s",
				}),
			});
		}
		return res
			.status(401)
			.json({ message: "The email and password your provided are invalid" });
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
router.get("/feedback/student/:id", async (req, res) => {
	try {
		const userId = parseInt(req.params.id);
		let modules = await db.query(
			"SELECT * FROM users u INNER JOIN student_feedback sf ON u.user_id = sf.student_id INNER JOIN modules m ON sf.module_id = m.module_id WHERE u.user_id = $1 ORDER BY sf.date DESC",
			[userId]
		);
		return res.json(modules.rows[0]);
	} catch (error) {
		console.log(error);
	}
});
router.post("/feedback/student", auth, async (req, res) => {
	try {
		const id = generateUniqueId({
			length: 5,
			useLetters: false,
		});
		const curDate = new Date();

		const { student_id, text, module_id, module_type } = req.body;
		await db.query(
			" INSERT INTO student_feedback (sfeedback_id, text, date, student_id, module_id, module_type) VALUES ($1, $2, $3, $4, $5, $6) ",
			[id, text, curDate, student_id, module_id, module_type]
		);

		res.json({ message: "success" });
	} catch (error) {
		console.error(error);
	}
});

router.post("/feedback/mentor", auth, async (req, res) => {
	try {
		const id = generateUniqueId({
			length: 5,
			useLetters: false,
		});
		const curDate = new Date();
		const { mentor_id, student_id, text, module_id } = req.body;

		await db.query(
			" INSERT INTO mentor_feedback (mfeedback_id, text, date, student_id, mentor_id, module_id) VALUES ($1, $2, $3, $4, $5, $6) ",
			[id, text, curDate, student_id, mentor_id, module_id]
		);
		res.json({ message: "success" });
	} catch (error) {
		console.error(error);
	}
});

export default router;
