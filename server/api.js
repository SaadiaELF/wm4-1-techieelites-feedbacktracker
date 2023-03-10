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
					if (user.rows[0].role === "admin") {
						user = await db.query(
							"SELECT *, full_name AS admin_name FROM users WHERE user_id = $1",
							[userId]
						);
					}
		return res.json(user.rows[0]);
	} catch (error) {
		console.log(error);
	}
});

router.post("/admin", async (req, res) => {

		const { full_name, email, role } = req.body;

		const ID = generateUniqueId({
			length: 6,
			useLetters: false,
		});

		const password = "123456";

		await db.query("INSERT INTO users (user_id, full_name, email, password, role) VALUES ($1, $2, $3, $4, $5)", [ID, full_name, email, password, role]);

		res.status(201).send(db);
});



export default router;
