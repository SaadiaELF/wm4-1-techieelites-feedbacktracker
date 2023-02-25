import { Router } from "express";
import db from "./db";
import logger from "./utils/logger";
import jsonwebtoken from "jsonwebtoken";
import generateUniqueId from "generate-unique-id";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.post("/login", async (req, res) => {
	try {
		const JWT_SECRET = generateUniqueId({
			length: 20,
		});

		const { email, password } = req.body;
		const user = await db.query("SELECT * FROM users WHERE email = $1", [
			email,
		]);
		if (email === user.rows[0].email && password === user.rows[0].password) {
			return res.json({
				token: jsonwebtoken.sign({ user: user.rows[0].email }, JWT_SECRET),
			});
		}
		return res
			.status(401)
			.json({ message: "The email and password your provided are invalid" });
	} catch (error) {
		console.log(error);
	}
});

export default router;
