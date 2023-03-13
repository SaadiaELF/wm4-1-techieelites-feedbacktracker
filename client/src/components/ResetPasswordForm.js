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
		oldPassword: true,
		confirmPassword: false,
	});
	const [isUpdated, setIsUpdated] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setErrors({
			newPassword: false,
			oldPassword: false,
			confirmPassword: false,
		});
		setPassword({ oldPassword: "", newPassword: "", confirmPassword: "" });
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
			console.log(userData);
			const res = await fetch(`/api/users/${user.userId}`, {
				method: "PUT",
				body: JSON.stringify(userData),
				headers: {
					authorization: `Bearer ${user.token}`,
					"Content-Type": "application/json",
				},
			});
			await res.json();
			setIsUpdated((isUpdated) => !isUpdated);
			setTimeout(() => {
				setOpen(false);
			}, 1000);
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
							error={errors.oldPassword}
							label="Old Password"
							size="small"
							name="oldPassword"
							type="password"
							value={password.oldPassword}
							placeholder="Old Password"
							onChange={handleInputChange}
							helperText={errors.oldPassword && "wrong password"}
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
