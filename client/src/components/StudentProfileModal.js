import * as React from "react";
import { ThemeProvider, CardContent, Typography, Card } from "@mui/material";
import { Stack } from "@mui/system";
import MentorFeedBackModal from "./MentorFeedbackModal";
import StudentProfileMentor from "./StudentProfileMentor";

const StudentProfileModal = ({ student, theme }) => {
	const [user, setUser] = React.useState({});

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
				<StudentProfileMentor student={student} bio={user.bio} />
			</Stack>
			<Stack
				spacing={1}
				sx={{
					maxWidth: "380px",
					padding: "1rem",
					margin: "auto",
				}}
			>
				<Stack spacing={2} sx={{ maxWidth: "380px", marginTop: "3rem" }}>
					<Typography variant="body1" sx={{ fontWeight: "bold" }}>
						Progress
					</Typography>
				</Stack>
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
						<Typography variant="body2" sx={{ fontWeight: 600 }}>
							Module/Lesson:{" "}
						</Typography>
						<Typography variant="body2" sx={{ fontWeight: 600 }}>
							SoftSkill:{" "}
						</Typography>
						<Typography variant="body2" sx={{ fontWeight: 600 }}>
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
