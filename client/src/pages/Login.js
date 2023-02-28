import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
	IconButton,
	InputAdornment,
	Stack,
	Typography,
	Alert,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RedButton from "../components/RedButton";

const Login = () => {
	const [values, setValues] = useState({
		email: "",
		password: "",
		showPassword: false,
	});
	const [errors, setErrors] = useState({
		email: false,
		password: false,
	});

	//check form validity
	const [formIsValid, setFormIsValid] = useState();
	const handleSubmit = (e) => {
		e.preventDefault();
		setFormIsValid("Loading...");
	};

	const handlePasswordVisibility = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const isEmailValid = (email) => {
		/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(errors.email);
	};

	const handleEmailBlur = () => {
		if (!isEmailValid(values.email)) {
			setErrors({ ...errors, email: !errors.email });
			return;
		}
		setErrors({ ...errors, email: false });
	};

	const handlePasswordBlur = () => {
		if (
			!values.password ||
			values.password.length < 6 ||
			values.password.length > 20
		) {
			setErrors({ ...errors, password: !errors.password });
			return;
		}
		setErrors({ ...errors, password: false });
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
							value={values.email}
							error={errors.email}
							onBlur={handleEmailBlur}
							required
							helperText={errors.email ? "Please enter a valid email" : ""}
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
							value={values.password}
							error={errors.password}
							required
							helperText={
								errors.password ? "Please enter a valid password" : ""
							}
							onBlur={handlePasswordBlur}
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
						<span>
							{formIsValid && <Alert severity="success">{formIsValid}</Alert>}
						</span>
					</Stack>
				</form>
			</Stack>
		</div>
	);
};

export default Login;
