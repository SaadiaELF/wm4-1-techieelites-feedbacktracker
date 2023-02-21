import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RedButton from "../components/RedButton";
import { useForm, Controller } from "react-hook-form";

const Login = () => {
	const [values, setValues] = useState({
		email: "",
		password: "",
		showPassword: false,
	});

	 const { control, handleSubmit } = useForm({
			defaultValues: {
				email: "",
				password: "",
				
			},
		});
		const onSubmit = (data) => console.log(data);

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// };
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

				<form onSubmit={handleSubmit(onSubmit)}>
					<Stack spacing={2}>
						<Controller
							name="email"
							control={control}
							render={({ field }) => (
								<TextField
									variant="outlined"
									label="Email"
									type="email"
									fullWidth
									id="email"
									name="email"
									placeholder="example@gmail.com"
									required
									{...field}
								/>
							)}
						/>

						<Controller
							name="password"
							control={control}
							render={({ field : {  onClick, ...field }}) => (
								<TextField
									variant="outlined"
									label="Password"
									type="password"
									fullWidth
									id="password"
									name="password"
									placeholder="********"
									required
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
									{...field}
								/>
							)}
						/>

						

						<RedButton fullWidth type="submit">
							Login
						</RedButton>
					</Stack>
				</form>
			</Stack>
		</div>
	);
};

export default Login;


