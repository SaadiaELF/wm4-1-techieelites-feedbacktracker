import React, { useState } from "react"
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment, Stack, Typography, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
	const [values, setValues] = useState({
		email: "",
		password: "",
		showPassword: false,
	})

	const handleSubmit = (e) => {
		e.preventDefault();
		
	}
const handlePasswordVisibility = () => {
	setValues({...values, showPassword:!values.showPassword })
}

	return (
		<Stack sx={{ maxWidth: 360, padding: "1rem" }} spacing={2}>
			<Stack >
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
						onChange={(e) => setValues({ ...values, password: e.target.value })}
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

					<Button
						variant="contained"
						fullWidth
						style={{ backgroundColor: "#EE4344" }}
					>
						Login
					</Button>
				</Stack>
			</form>
		</Stack>
	);
}

export default Login;
