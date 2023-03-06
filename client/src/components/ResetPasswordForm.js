import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import RedButton from "./RedButton";
import WhiteButton from "./WhiteButton";
import { Stack } from "@mui/system";

const ResetPasswordForm = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box>
			<RedButton size="small" variant="contained" onClick={handleClickOpen}>
				Reset Password
			</RedButton>
			<Dialog open={open} onClose={handleClose} fullWidth>
				<DialogTitle sx={{ backgroundColor: "#EE4344", color: "#FFFFFF" }}>
					Reset Password
				</DialogTitle>
				<DialogContent dividers>
					<Stack spacing={2}>
						<TextField
							label="New Password"
							size="small"
							placeholder="New Password"
							required
						/>
						<TextField
							label="Repeat Password"
							size="small"
							placeholder="Repeat password"
							required
						/>
					</Stack>
				</DialogContent>
				<DialogActions>
					<WhiteButton onClick={handleClose}>Cancel</WhiteButton>
					<RedButton onClick={handleClose}>Save</RedButton>
				</DialogActions>
			</Dialog>
		</Box>
	);
};

export default ResetPasswordForm;
