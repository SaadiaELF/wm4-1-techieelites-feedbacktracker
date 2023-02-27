import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import WelcomeMsg from "../components/WelcomeMsg";
import Profile from "../components/Profile";
import FeedbackModal from "../components/FeedbackModal";
import Progress from "../components/Progress";

const StudentDashboard = ({ theme }) => {
	const [user, setUser] = React.useState({});

	const getUserById = async () => {
		try {
			const user = JSON.parse(localStorage.getItem("user"));

			const res = await fetch(`/api/users/${user.userId}`, {
				headers: { authorization: `Bearer ${user.token}` },
			});
			const data = await res.json();
			console.log({ data });
			setUser(data);
		} catch {
			(error) => {
				console.error(error);
			};
		}
	};

	React.useEffect(() => {
		getUserById();
	}, []);

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
				<WelcomeMsg message={`Welcome ${user.full_name}!👋`} />
				<Profile />
				<Progress />
				<FeedbackModal />
			</Stack>
		</ThemeProvider>
	);
};

export default StudentDashboard;
