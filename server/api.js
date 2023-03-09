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
				"SELECT u.*, sm.mentor_type, us.full_name AS mentor_name FROM users u INNER JOIN student_mentor sm  ON (u.user_id = sm.student_id) INNER JOIN users us ON (us.user_id = sm.mentor_id) WHERE u.user_id = $1",
				[userId]
			);
		}
		if (user.rows[0].role === "mentor") {
			user = await db.query(
				"SELECT u.*, sm.mentor_type, us.full_name AS student_name FROM users u INNER JOIN student_mentor sm  ON (u.user_id = sm.mentor_id) INNER JOIN users us ON (us.user_id = sm.student_id) WHERE u.user_id = $1",
				[userId]
			);
		}
		return res.json(user.rows[0]);
	} catch (error) {
		console.log(error);
	}
});

router.post("/users/:id", async (req, res) => {
	try {
		const userId = req.params.id;
		const mod_id = req.body.mod_id;

		let user = await db.query("SELECT * FROM users WHERE user_id = $1", [
			userId,
		]);
		const newUser = user.rows[0];

		if (newUser.role === "student") {
			const id = generateUniqueId({
				length: 5,
				useLetters: false,
			});
			const curDate = new Date();
			const moduleId = await db.query(
				"SELECT module_id FROM modules WHERE module_id = $1",
				[mod_id]
			);
			console.log(moduleId);
			const {
				sfeedback_id = newUser.id,
				student_id = newUser.user_id,
				text = newUser.text,
				module_id = moduleId,
				date = curDate,
			} = req.body;
			user = await db.query(
				" INSERT INTO student_feedback (sfeedback_id, text, date, student_id, module_id) VALUES ($1, $2, $3, $4, $5) ",
				[sfeedback_id, text, date, student_id, module_id]
			);
		}
		// if (user.rows[0].role === "mentor") {}
		res.json({ message: "success" });
	} catch (error) {
		console.error(error);
	}
});

export default router;
