import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import RedButton from "./RedButton";
import WhiteButton from "./WhiteButton";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const ResetPasswordForm = () => {
	const [open, setOpen] = React.useState(false);
	const [password, setPassword] = React.useState({
		oldPassword: "",
		newPassword: "",
		confirmPassword: "",
	});
	const [errors, setErrors] = React.useState({
		newPassword: false,
		confirmPassword: false,
	});
	const [isUpdated, setIsUpdated] = React.useState(false);
	const [isNotUpdated, setIsNotUpdated] = React.useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setErrors({
			newPassword: false,
			confirmPassword: false,
		});
		setPassword({ oldPassword: "", newPassword: "", confirmPassword: "" });
		setIsUpdated(false);
		setIsNotUpdated(false);
	};

	const handleInputChange = (e) => {
		setPassword({ ...password, [e.target.name]: e.target.value });
	};

	const isValidPassword = () => {
		if (
			!password.newPassword ||
			password.newPassword.length < 6 ||
			password.newPassword.length > 20
		) {
			setErrors({ ...errors, newPassword: !errors.newPassword });
			return;
		}
		setErrors({ ...errors, newPassword: false });
	};

	const isSamePassword = () => {
		if (password.newPassword !== password.confirmPassword) {
			setErrors({ ...errors, confirmPassword: !errors.confirmPassword });
			return;
		}
		setErrors({ ...errors, confirmPassword: false });
	};

	const updateUserById = async (userData) => {
		try {
			const user = JSON.parse(localStorage.getItem("user"));

			const res = await fetch(`/api/users/${user.userId}`, {
				method: "PUT",
				body: JSON.stringify(userData),
				headers: {
					authorization: `Bearer ${user.token}`,
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
			console.log(data);
			if (res.ok) {
				setIsUpdated((isUpdated) => !isUpdated);
				setIsNotUpdated(false);
				setTimeout(() => {
					setOpen(false);
				}, 1000);
			} else {
				setIsNotUpdated((isNotUpdated) => !isNotUpdated);
			}
		} catch {
			(error) => {
				console.error(error);
			};
		}
	};

	return (
		<Box>
			<RedButton size="small" variant="contained" onClick={handleClickOpen}>
				Reset Password
			</RedButton>
			<Dialog open={open} onClose={handleClose} fullWidth>
				<DialogTitle sx={{ backgroundColor: "#EE4344", color: "#FFFFFF" }}>
					{handleClose ? (
						<IconButton
							aria-label="close"
							onClick={handleClose}
							sx={{
								position: "absolute",
								right: 8,
								top: 8,
								color: "#FFFFFF",
							}}
						>
							<CloseIcon />
						</IconButton>
					) : null}{" "}
					Reset Password
				</DialogTitle>
				<DialogContent dividers>
					<Stack spacing={2}>
						<TextField
							label="Old Password"
							size="small"
							name="oldPassword"
							type="password"
							value={password.oldPassword}
							placeholder="Old Password"
							onChange={handleInputChange}
							required
						/>
						<TextField
							error={errors.newPassword}
							label="New Password"
							size="small"
							name="newPassword"
							type="password"
							value={password.newPassword}
							placeholder="New Password"
							onChange={handleInputChange}
							onBlur={isValidPassword}
							helperText={
								errors.newPassword &&
								"Password should be between 6-20 characters"
							}
							required
						/>
						<TextField
							error={errors.confirmPassword}
							label="Confirm Password"
							size="small"
							name="confirmPassword"
							type="password"
							value={password.confirmPassword}
							placeholder="Confirm password"
							onBlur={isSamePassword}
							onChange={handleInputChange}
							helperText={errors.confirmPassword && "Passwords do not match"}
							required
						/>
						{isNotUpdated && <Alert severity="error">Something is wrong</Alert>}
						{isUpdated && (
							<Alert severity="success">
								Password was successfully changed
							</Alert>
						)}
					</Stack>
				</DialogContent>
				<DialogActions>
					<WhiteButton onClick={handleClose}>Cancel</WhiteButton>
					<RedButton onClick={() => updateUserById(password)}>Save</RedButton>
				</DialogActions>
			</Dialog>
		</Box>
	);
};

export default ResetPasswordForm;
