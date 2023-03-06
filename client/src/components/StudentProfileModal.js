import * as React from "react";
import {
	Button,
	ThemeProvider,
	CardContent,
	Typography,
	Card,
} from "@mui/material";
import Profile from "../components/Profile";
import { Stack } from "@mui/system";
import MentorFeedBackModal from "./MentorFeedbackModal";

const StudentProfileModal = ({ student, theme }) => {
	const [user, setUser] = React.useState({});

	return (
		<ThemeProvider theme={theme}>
			<Stack
				sx={{
					maxWidth: "380px",
					padding: "1rem",
					margin: "auto",
					marginBottom: "3rem",
				}}
				spacing={2}
			>
				<Profile student={student} bio={user.bio} />
			</Stack>
			<Stack
				spacing={2}
				sx={{
					maxWidth: "380px",
					padding: "1rem",
					margin: "auto",
				}}
			>
				<Typography
					variant="body1"
					align="left"
					sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
				>
					Progress
				</Typography>
				<Card
					sx={{
						display: "flex",
						flexDirection: "column",
						backgroundColor: "#F2EFF0",
						minHeight: 230,
						width: "100%",
					}}
				>
					<CardContent>
						<Typography variant="body1" sx={{ fontWeight: "bold" }}>
							Module/Lesson:{" "}
						</Typography>
						<Typography variant="body1" sx={{ fontWeight: "bold" }}>
							softSkill:{" "}
						</Typography>
						<Typography variant="body1" sx={{ fontWeight: "bold" }}>
							Feedback about the course:{" "}
						</Typography>
					</CardContent>
				</Card>
				<MentorFeedBackModal />
			</Stack>
		</ThemeProvider>
	);
};

export default StudentProfileModal;
