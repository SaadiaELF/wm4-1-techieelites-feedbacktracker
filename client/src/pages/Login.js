import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
	IconButton,
	InputAdornment,
	Stack,
	Typography,
	Container,
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

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const handlePasswordVisibility = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	return (
		<Container
			maxWidth="xxl"
			sx={{
				height: "90vh",
				position: "relative",

				"&::before": {
					zIndex: -1,
					content: '""',
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					filter: {
						xs: "grayscale(80%) blur(1px) opacity(0.3)",
						md: "grayscale(60%) blur(2px) opacity(0.5)",
					},
					backgroundImage:
						"url(https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
					backgroundSize: "cover",
				},
			}}
		>
			<Container
				sx={{
					marginInline: "auto",
					maxWidth: "72rem",
				}}
			>
				<Stack
					sx={{
						display: "flex",
						justifyContent: "center",
						maxWidth: 360,
						height: "90vh",
						padding: "1rem",
						margin: { xs: "1rem auto", md: "1rem 1rem 1rem auto" },
					}}
					spacing={5}
				>
					<Stack spacing={1}>
						<Typography variant="h4" sx={{ fontSize: { xs: 24, md: 32 } }}>
							Hi, Welcome back! 👋
						</Typography>
						<Typography variant="h6" sx={{ fontSize: { xs: 16, md: 22 } }}>
							Hello again, you have been missed
						</Typography>
					</Stack>
					<form onSubmit={handleSubmit}>
						<Stack spacing={3}>
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

							<RedButton size="large" fullWidth>
								Login
							</RedButton>
						</Stack>
					</form>
				</Stack>
			</Container>
		</Container>
	);
};

export default Login;
