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

const FeedbackModal = ({ techModule, softSkill }) => {
	const [open, setOpen] = React.useState(false);
	const user = JSON.parse(localStorage.getItem("user"));
	const [newFeedback, setNewFeedback] = React.useState({
		student_id: user.userId,
		text: "",
		module_id: 0,
		module_type: "tech",
	});

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
			module_id: techModule.module_id,
		});
	};

	async function addNewFeedback() {
		try {
			const user = JSON.parse(localStorage.getItem("user"));
			const res = await fetch("/api/feedback/student", {
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
				throw Error(res.statusText);
			}
		} catch (error) {
			console.log({ error });
		}
		setOpen(false);
	}

	return (
		<Box
			sx={{
				position: "relative",
				top: 0,
			}}
		>
			<RedButton sx={{ margin: 0 }} onClick={handleClickOpen} fullWidth>
				Add Feedback
			</RedButton>
			<Dialog open={open} onClose={handleClose} fullWidth>
				<DialogTitle sx={{ backgroundColor: "#EE4344", color: "#FFFFFF" }}>
					Feedback Form
				</DialogTitle>
				<DialogContent dividers>
					<DialogContentText sx={{ paddingBottom: "1rem", fontWeight: 600 }}>
						{`Module : ${techModule.module} / ${techModule.lesson}`}
					</DialogContentText>
					<TextField
						sx={{ backgroundColor: "#FFFFFF" }}
						multiline
						label="Message"
						rows={2}
						fullWidth
						onChange={handleTextChange}
					/>
				</DialogContent>
				<DialogActions>
					<WhiteButton onClick={handleClose}>Cancel</WhiteButton>
					<RedButton onClick={addNewFeedback}>Send</RedButton>
				</DialogActions>
			</Dialog>
		</Box>
	);
};

export default FeedbackModal;
