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
		
		const role = req.query.role;	
		if (role === "admin") {
			users = await db.query("SELECT * FROM users WHERE role = 'admin'");
		}
		if (role === "mentor") {
			users = await db.query("SELECT * FROM users WHERE role = 'mentor'");
		}	
		if (role === "student") {
			users = await db.query("SELECT * FROM users INNER JOIN students ON (users.user_id = students.student_id) ");
		}
		res.json(users.rows);
	} catch (err) {
		console.error(err);
	}
});

router.get("/users/:id", async (req, res) => {
	try {
		const userId = parseInt(req.params.id);
		const users = await db.query(
			"SELECT student_id AS id, full_name, role FROM students UNION ALL SELECT mentor_id, full_name, role FROM mentors"
		);
		if (!users) {
			res.status(404).json({ message: "No users found" });
		}
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
