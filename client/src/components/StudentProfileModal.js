import * as React from "react";
import { Button, ThemeProvider } from "@mui/material"
import Profile from "../components/Profile";
import { Stack } from "@mui/system";

const StudentProfileModal = ({ student, theme }) => {
	const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState({});

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<ThemeProvider theme={theme}>
			<Stack
				sx={{
					maxWidth: "380px",
					padding: "1rem",
					margin: "auto",
				}}
				spacing={2}
			>
				<Profile
					student={student}
					bio={user.bio}
					
				/>
			</Stack>
		</ThemeProvider>
	);
};

export default StudentProfileModal;
