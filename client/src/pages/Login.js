import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	IconButton,
	InputAdornment,
	Stack,
	Typography,
	TextField,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RedButton from "../components/RedButton";

const Login = () => {
	const navigate = useNavigate();
	const [values, setValues] = useState({
		email: "",
		password: "",
		showPassword: false,
	});

	async function login() {
		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				body: JSON.stringify(values),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (res.status === 200) {
				const data = await res.json();
				localStorage.setItem("user", JSON.stringify(data));
			}
			return res;
		} catch {
			(error) => {
				console.error(error);
			};
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		login().then(() => {
			const user = JSON.parse(localStorage.getItem("user"));

			if (user.role === "student") {
				navigate("/student");
				window.location.reload();
			} else if (user.role === "admin") {
				navigate("/admin");
				window.location.reload();
			} else if (user.role === "mentor") {
				navigate("/mentor");
				window.location.reload();
			} else {
				window.location.reload();
			}
		});
	};

	const handlePasswordVisibility = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	return (
		<div style={{ marginInline: "auto", maxWidth: "72rem" }}>
			<Stack sx={{ maxWidth: 360, padding: "1rem" }} spacing={2}>
				<Stack>
					<Typography variant="h4" sx={{ fontSize: 32 }}>
						Hi, Welcome back! 👋
					</Typography>
					<Typography variant="h6" sx={{ fontSize: 20 }}>
						Hello again, you have been missed
					</Typography>
				</Stack>
				<form onSubmit={handleSubmit}>
					<Stack spacing={2}>
						<TextField
							variant="outlined"
							label="Email"
							type="email"
							fullWidth
							id="email"
							name="email"
							placeholder="example@gmail.com"
							required
							onChange={(e) => setValues({ ...values, email: e.target.value })}
						></TextField>

						<TextField
							variant="outlined"
							label="Password"
							type={values.showPassword ? "text" : "password"}
							fullWidth
							id="password"
							name="password"
							placeholder="********"
							required
							onChange={(e) =>
								setValues({ ...values, password: e.target.value })
							}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											onClick={handlePasswordVisibility}
											aria-label="toggle password"
											edge="end"
										>
											{values.showPassword ? (
												<VisibilityOffIcon />
											) : (
												<VisibilityIcon />
											)}
										</IconButton>
									</InputAdornment>
								),
							}}
						></TextField>

						<RedButton type="submit" fullWidth>
							Login
						</RedButton>
					</Stack>
				</form>
			</Stack>
		</div>
	);
};

export default Login;
