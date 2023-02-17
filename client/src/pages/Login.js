//import * as React from "react";
import React, { useState } from "react"

import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment, Paper, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { Container, Grid } from "@mui/material";



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
		<div>
			<Container maxWidth="sm">
				<Grid
					container
					spacing={2}
					direction="column"
					justifyContent={"center"}
					style={{ minHeight: "100vh" }}
				>
					<Paper elevation={2} sx={{ padding: 5 }}>
						<form onSubmit={handleSubmit}>
							<Grid container spacing={2} direction="column">
								<Typography variant="h3">Hi, Welcome back! 👋</Typography>
								<Typography variant="h5">
									Hello again, you have been missed
								</Typography>

								<Grid item>
									<TextField
										variant="outlined"
										label="Email"
										type="email"
										fullWidth
										id="email"
										name="email"
										placeholder="example@gmail.com"
										required
										onChange={(e) =>
											setValues({ ...values, email: e.target.value })
										}
									></TextField>
								</Grid>
								<Grid item>
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
								</Grid>
								<Grid item>
									<Button
										variant="contained"
										fullWidth
										style={{ backgroundColor: "#EE4344" }}
									>
										Login
									</Button>
								</Grid>
							</Grid>
						</form>
					</Paper>
				</Grid>
			</Container>
		</div>
	);
}

export default Login;
