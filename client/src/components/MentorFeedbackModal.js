import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import RedButton from "./RedButton";
import WhiteButton from "./WhiteButton";

const MentorFeedBackModal = ({ studentData }) => {
	const [open, setOpen] = React.useState(false);
	const user = JSON.parse(localStorage.getItem("user"));
	const [newFeedback, setNewFeedback] = React.useState({
		student_id: 0,
		text: "",
		module_id: 0,
		mentor_id: user.userId,
	});
	const [successMessage, setSuccessMessage] = React.useState("");
	const [errorMessage, setErrorMessage] = React.useState("");

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleTextChange = (e) => {
		setNewFeedback({
			...newFeedback,
			text: e.target.value,
			module_id: studentData.module_id,
			student_id: studentData.user_id,
		});
	};

	async function addNewFeedback() {
		try {
			const user = JSON.parse(localStorage.getItem("user"));
			const res = await fetch("/api/feedback/mentor", {
				method: "POST",
				body: JSON.stringify(newFeedback),
				headers: {
					authorization: `Bearer ${user.token}`,
					"Content-Type": "application/json",
				},
			});
			const result = await res.json();
			console.log(result);
			if (!res.ok) {
				setErrorMessage("Something went wrong, please try again");
			} else {
				setSuccessMessage("Feedback sent successfully");
				setTimeout(() => {
					setOpen(false);
				}, 1000);
			}
		} catch (error) {
			console.log({ error });
		}
	}

	return (
		<Box
			sx={{
				position: "relative",
				top: 75,
			}}
		>
			<RedButton sx={{ margin: 0 }} onClick={handleClickOpen} fullWidth>
				Add Feedback
			</RedButton>
			<Dialog open={open} onClose={handleClose} fullWidth>
				<DialogTitle sx={{ backgroundColor: "#EE4344", color: "#FFFFFF" }}>
					Mentor Feedback Form
				</DialogTitle>

				<DialogContent dividers>
					<DialogContentText>{`Student : ${studentData.full_name}`}</DialogContentText>
					<DialogContentText sx={{ paddingBottom: "1rem" }}>
						{`Module : ${studentData.title} `}
					</DialogContentText>
					<TextField
						sx={{ backgroundColor: "#FFFFFF", marginBottom: "1rem" }}
						multiline
						label="Message"
						rows={2}
						fullWidth
						onChange={handleTextChange}
					/>
					{errorMessage && <Alert severity="error">{errorMessage}</Alert>}
					{successMessage && <Alert severity="success">{successMessage}</Alert>}
				</DialogContent>
				<DialogActions>
					<WhiteButton onClick={handleClose}>Cancel</WhiteButton>
					<RedButton onClick={addNewFeedback}>Send</RedButton>
				</DialogActions>
			</Dialog>
		</Box>
	);
};

export default MentorFeedBackModal;
