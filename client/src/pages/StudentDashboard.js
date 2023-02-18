import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import WelcomeMsg from "../components/WelcomeMsg";
import Profile from "../components/Profile";

const StudentDashboard = ({ theme }) => (
	<ThemeProvider theme={theme}>
		<Stack sx={{padding:'1rem'}}>
			<WelcomeMsg message="Welcome student name!👋" />
			<Profile />
		</Stack>
	</ThemeProvider>
);

export default StudentDashboard;