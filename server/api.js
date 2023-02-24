import { response, Router } from "express";
import db from "./db";

import logger from "./utils/logger";
const generateUniqueId = require("generate-unique-id");

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/users", async (req, res) => {
	try {
		let users = await db.query("SELECT * FROM users");
		res.json(users.rows);
	} catch (err) {
		console.error(err);
	}
});

router.get("/users/admin", async (req, res) => {
	try {
		let users = await db.query("SELECT * FROM users WHERE role = 'admin'");
		res.json(users.rows);
	} catch (err) {
		console.error(err);
	}
});
router.get("/users/mentor", async (req, res) => {
	try {
		let users = await db.query("SELECT * FROM users WHERE role = 'mentor'");
		res.json(users.rows);
	} catch (err) {
		console.error(err);
	}
});

router.get("/users/student", async (req, res) => {
	try {
		let users = await db.query(
			"SELECT u.*, s.module, s.lesson, s.skill, s.mentor_id FROM users u INNER JOIN students s ON (u.user_id = s.student_id)"
		);
		res.json(users.rows);
	} catch (err) {
		console.error(err);
	}
});

router.get("/users/:id", async (req, res) => {
	try {
		const userId = parseInt(req.params.id);
		const users = await db.query("SELECT * FROM users WHERE user_id = $1", [
			userId,
		]);
		if (users.rows.length < 1) {
			res.status(404).json({ message: "User not found" });
		}
		res.json(users.rows[0]);
	} catch (err) {
		console.error(err);
	}
});
router.get("/users/admin/:id", async (req, res) => {
	try {
		const userId = parseInt(req.params.id);
		const users = await db.query(
			"SELECT * FROM users WHERE role = $1 AND user_id = $2",
			["admin", userId]
		);
		if (users.rows.length < 1) {
			res.status(404).json({ message: "User not found" });
		}
		res.json(users.rows[0]);
	} catch (err) {
		console.error(err);
	}
});
router.get("/users/mentor/:id", async (req, res) => {
	try {
		const userId = parseInt(req.params.id);
		const users = await db.query(
			"SELECT * FROM users WHERE role = $1 AND user_id = $2",
			["mentor", userId]
		);
		if (users.rows.length < 1) {
			res.status(404).json({ message: "User not found" });
		}
		res.json(users.rows[0]);
	} catch (err) {
		console.error(err);
	}
});
router.get("/users/student/:id", async (req, res) => {
	try {
		const userId = parseInt(req.params.id);
		const users = await db.query(
			"SELECT u.*, s.module, s.lesson, s.skill, CASE WHEN s.mentor_id IS NOT NULL THEN us.full_name END AS mentor_name FROM users u INNER JOIN students s ON (u.user_id = s.student_id) LEFT JOIN users us ON (us.user_id = s.mentor_id) WHERE u.role = $1 AND u.user_id = $2",
			["student", userId]
		);
		if (users.rows.length < 1) {
			res.status(404).json({ message: "User not found" });
		}
		res.json(users.rows[0]);
	} catch (err) {
		console.error(err);
	}
});

//post

router.post("/users", async (req, res) => {
	try {
		const id = generateUniqueId({
			length: 6,
			useLetters: false,
		});
		const {
			full_name,
			email,
			password,
			role,
			img_url = null,
			bio = null,
		} = req.body;
		await db.query(
			"INSERT INTO users (user_id, full_name, email, password, role, img_url, bio) VALUES ($1, $2, $3, $4, $5, $6, $7)",
			[id, full_name, email, password, role, img_url, bio]
		);
		const newUser = await db.query("SELECT * FROM users WHERE user_id = $1", [
			id,
		]);
		const newUserRole = newUser.rows[0].role;

		if (newUserRole === "student") {
			const {
				module = null,
				lesson = null,
				skill = null,
				mentor_id = null,
			} = req.body;
			await db.query(
				"INSERT INTO students (student_id, module, lesson, skill, mentor_id) VALUES ($1, $2, $3, $4, $5)",
				[id, module, lesson, skill, mentor_id]
			);
		} else if (newUserRole === "mentor") {
			await db.query("INSERT INTO mentors (mentor_id) VALUES ($1)", [id]);
		} else if (newUserRole === "admin") {
			await db.query("INSERT INTO admins (admin_id) VALUES ($1)", [id]);
		}
		res.json(newUser.rows[0]);
	} catch (err) {
		console.error(err);
	}
});

router.put("/users/:id", async (req, res) => {
	try {
		const userId = parseInt(req.params.id);
		const user = await db.query("SELECT * FROM users WHERE user_id = $1", [
			userId,
		]);
		const userData = user.rows[0];
		const {
			full_name = userData.full_name,
			email = userData.email,
			password = userData.password,
			role = userData.role,
			img_url = userData.img_url,
			bio = userData.bio,
		} = req.body;

		await db.query(
			"UPDATE users SET full_name = $1, email = $2, password = $3, role = $4, img_url = $5, bio = $6 WHERE user_id = $7",
			[full_name, email, password, role, img_url, bio, userId]
		);
		res.json({ message: "User updated" });
	} catch (err) {
		console.error(err);
	}
});

router.put("/users/student/:id", async (req, res) => {
	try {
		const userId = parseInt(req.params.id);
		const user = await db.query(
			"SELECT * FROM students WHERE student_id = $1",
			[userId]
		);
		const userData = user.rows[0];
		const {
			module = userData.module,
			lesson = userData.lesson,
			skill = userData.skill,
			mentor_id = userData.mentor_id,
		} = req.body;
		await db.query(
			"UPDATE students SET module = $1, lesson = $2, skill = $3, mentor_id = $4 WHERE student_id = $5",
			[module, lesson, skill, mentor_id, userId]
		);
		res.json({ message: "User updated" });
	} catch (error) {
		console.error(error);
	}
});

router.delete("/users/:id", async (req, res) => {
	try {
		const userId = parseInt(req.params.id);
		await db.query("DELETE FROM users WHERE user_id = $1", [userId]);
		res.json({ message: "User deleted" });
	} catch (err) {
		console.error(err);
	}
});
export default router;
