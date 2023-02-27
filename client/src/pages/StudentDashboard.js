import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import WelcomeMsg from "../components/WelcomeMsg";
import Profile from "../components/Profile";
import FeedbackModal from "../components/FeedbackModal";
import Progress from "../components/Progress";

const StudentDashboard = ({ theme }) => {
	const [bio, setBio] = React.useState(
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec consequat ipsum."
	);

	const handleBioChange = (e) => {
		setBio(e.target.value);
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
				<WelcomeMsg message="Welcome student name!👋" />
				<Profile
					mentorName="mentor name"
					bio={bio}
					handleBioChange={handleBioChange}
				/>
				<Progress />
				<FeedbackModal />
			</Stack>
		</ThemeProvider>
	);
};

export default StudentDashboard;
