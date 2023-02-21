import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import RedButton from "./RedButton";
import WhiteButton from "./WhiteButton";

const FeedbackModal = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box
			sx={{
				display: "flex",
				alignSelf: "end",
				justifySelf: "flex-end",
				position: "relative",
				top: 75,
			}}
		>
			<RedButton sx={{ margin: 0 }} onClick={handleClickOpen}>
				Add Feedback
			</RedButton>
			<Dialog open={open} onClose={handleClose} fullWidth>
				<DialogTitle sx={{ backgroundColor: "#EE4344", color: "#FFFFFF" }}>
					Feedback Form
				</DialogTitle>
				<DialogContent dividers>
					<DialogContentText sx={{ paddingBottom: "1rem" }}>
						Module :
					</DialogContentText>
					<TextField
						sx={{ backgroundColor: "#FFFFFF" }}
						multiline
						label="Message"
						rows={2}
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<WhiteButton onClick={handleClose}>Cancel</WhiteButton>
					<RedButton onClick={handleClose}>Send</RedButton>
				</DialogActions>
			</Dialog>
		</Box>
	);
};

export default FeedbackModal;
