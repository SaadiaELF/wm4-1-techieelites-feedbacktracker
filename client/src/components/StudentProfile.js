import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StudentProfileModal from "./StudentProfileModal";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function StudentProfile({ studentData }) {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<IconButton aria-label="more-info" onClick={handleClickOpen}>
				<MoreVertIcon />
			</IconButton>
			<Dialog
				fullScreen
				align="center"
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
			>
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						onClick={handleClose}
						aria-label="close"
					>
						<CloseIcon />
					</IconButton>
				</Toolbar>
				<StudentProfileModal studentData={studentData} />
			</Dialog>
		</div>
	);
}
