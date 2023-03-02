import React from 'react'
import { ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import WelcomeMsg from "../components/WelcomeMsg";
import Profile from "../components/Profile";
import StudentInfo from '../components/StudentInfo';

const MentorDashboard = ({ theme }) => (
	<ThemeProvider theme={theme}>
		<Stack
			sx={{
				maxWidth: "380px",
				padding: "1rem",
				margin: "auto",
			}}
			spacing={2}
		>
			<WelcomeMsg message="Welcome mentor name!👋" />
			<Profile />
			<StudentInfo />
			
		</Stack>
	</ThemeProvider>
);
export default MentorDashboard

