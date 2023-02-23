import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import WelcomeMsg from "../components/WelcomeMsg";
import Profile from "../components/Profile";
import Progress from "../components/Progress";

const StudentDashboard = ({ theme }) => (
	<ThemeProvider theme={theme}>
		<Stackspacing={2} sx={{ maxWidth: "380px", padding: "1rem", margin: "auto" }}>
			<WelcomeMsg message="Welcome student name!👋" />
			<Profile />
			<Progress />
		</Stack>
	</ThemeProvider>
);

export default StudentDashboard;
