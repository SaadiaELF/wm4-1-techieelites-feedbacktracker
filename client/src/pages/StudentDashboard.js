import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import WelcomeMsg from "../components/WelcomeMsg";
import Profile from "../components/Profile";
import FeedbackModal from "../components/FeedbackModal";
import Progress from "../components/Progress";

const StudentDashboard = ({ theme }) => (
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
			<Profile />
      <Progress />
			<FeedbackModal />
		</Stack>
	</ThemeProvider>
);

export default StudentDashboard;
