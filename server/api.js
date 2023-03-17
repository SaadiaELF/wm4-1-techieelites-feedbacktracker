import { Router } from "express";
import db from "./db";
import logger from "./utils/logger";
import jsonwebtoken from "jsonwebtoken";
import auth from "./utils/auth";
import "dotenv/config";
import bcrypt from "bcrypt";

const generateUniqueId = require("generate-unique-id");

const router = Router();
const isEmailValid = (email) => {
	return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

//Admin adding users
router.post("/users", auth, async (req, res) => {
	try {
		const id = generateUniqueId({
			length: 6,
			useLetters: false,
		});
		const password = "123456";
		const { full_name, email, role } = req.body;
		const userExists = await db.query("SELECT * FROM users WHERE email = $1", [
			email,
		]);

		if (!full_name) {
			return res.status(400).json({ error: "Full name is required" });
		}
		if (!email || !isEmailValid(email)) {
			return res.status(400).json({ error: "Email is required" });
		}
		if (!role) {
			return res.status(400).json({ error: "Role must be provided" });
		}
		if (userExists.rows.length > 0) {
			return res.status(409).json({ error: "User already exists" });
		}
		const hash = await bcrypt.hash(JSON.stringify(password), 10);

		await db.query(
			"INSERT INTO users (user_id, full_name, email, password, role) VALUES ($1, $2, $3, $4, $5) ",
			[id, full_name, email, hash, role]
		);
		return res.status(201).json({ message: "User created successfully" });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Internal server error" });
	}
});
// Authenticate user login
router.post("/auth/login", async (req, res) => {
	try {
		const JWT_SECRET = process.env.JWT_SECRET;
		const { email, password } = req.body;
		//check if email is valid
		if (!email || !isEmailValid(email)) {
			throw new Error("Invalid email address");
		}

		const user = await db.query("SELECT * FROM users WHERE email = $1", [
			email,
		]);
		// check if user  with the queried email exists
		if (user.rows.length === 0) {
			res.status(400).json({ error: "User not found" });
			return;
		}
		// check if password is present
		if (!password) {
			throw new Error("Password is required");
		}

		const isValid = await bcrypt.compare(
			JSON.stringify(password),
			user.rows[0].password
		);
		if (!isValid) {
			throw new Error("Invalid password");
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
		console.error(error);
		res.status(400).json({ error: error.message });
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
				"SELECT u.*, sm.mentor_id, sm.mentor_type, us.full_name  AS mentor_name FROM users u FULL OUTER JOIN student_mentor sm  ON (u.user_id = sm.student_id) FULL OUTER JOIN users us ON (us.user_id = sm.mentor_id) WHERE u.user_id = $1",
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
			return res.status(404).json({ message: "User not found" });
		}
		const { oldPassword, newPassword, img_url, bio } = req.body;

		if (bio || img_url) {
			await db.query(
				"UPDATE users SET img_url = $1, bio = $2 WHERE user_id = $3",
				[img_url, bio, userId]
			);
			return res.json({ message: "User updated" });
		}
		const isValid = await bcrypt.compare(
			JSON.stringify(oldPassword),
			user.rows[0].password
		);

		if (!isValid) {
			res.status(400).json({ message: "Invalid credentials" });
			return;
		}

		if (newPassword) {
			const hashNewPassword = await bcrypt.hash(
				JSON.stringify(newPassword),
				10
			);

			await db.query("UPDATE users SET password = $1 WHERE user_id = $2", [
				hashNewPassword,
				userId,
			]);
			return res.json({ message: "User updated" });
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Internal server error" });
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
router.get("/feedback/mentor/:id", async (req, res) => {
	try {
		const userId = parseInt(req.params.id);
		let feedbacks= await db.query(
			"SELECT * FROM users u INNER JOIN mentor_feedback mf ON u.user_id = mf.mentor_id INNER JOIN modules m ON mf.module_id = m.module_id WHERE u.user_id = $1 ORDER BY mf.date DESC",
			[userId]
		);
		return res.json(feedbacks.rows[0]);
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
