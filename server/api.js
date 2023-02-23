import { response, Router } from "express";
import db from "./db";

import logger from "./utils/logger";

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
		const users = await db.query(
			"SELECT * FROM users WHERE user_id = $1", [userId],
		);
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
		const users = await db.query("SELECT * FROM users WHERE role = $1 AND user_id = $2", ["admin", userId]);
		if(users.rows.length < 1) {
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

//post

router.post("/users", async (req, res) => {
	try {
	} catch (err) {
		console.error(err);
	}
});

router.put("/users/:id", async (req, res) => {
	try {
	} catch (err) {
		console.error(err);
	}
});

router.delete("/users/:id", async (req, res) => {
	try {
	} catch (err) {
		console.error(err);
	}
});
export default router;
