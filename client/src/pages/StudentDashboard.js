import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import WelcomeMsg from "../components/WelcomeMsg";
import Profile from "../components/Profile";

const StudentDashboard = ({ theme }) => (
	<ThemeProvider theme={theme}>
		<WelcomeMsg message="Welcome student name!👋" />
		<Profile />
	</ThemeProvider>
);

export default StudentDashboard;
