import * as React from "react";
import { CardContent, Typography, Card } from "@mui/material";
import { Stack } from "@mui/system";
import MentorFeedBackModal from "./MentorFeedbackModal";
import StudentProfileMentor from "./StudentProfileMentor";
import { auto } from "@popperjs/core";

const StudentProfileModal = ({ studentData }) => {
	return (
		<Stack
			sx={{
				maxWidth: "380px",
				padding: "1rem",
				margin: "auto",
				minWidth: "380px",
				marginTop: "1rem",
			}}
			spacing={2}
		>
			<StudentProfileMentor
				studentName={studentData.full_name}
				bio={studentData.bio}
				avatar={studentData.img_url}
			/>

			<Stack
				spacing={2}
				sx={{
					maxWidth: "380px",
					marginTop: "3rem",
					position: "relative",
					top: 65,
				}}
			>
				<Typography variant="body1" sx={{ fontWeight: "bold" }}>
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
					<CardContent >
						{studentData.module_type === "pd" ? (
							<Typography variant="body2" sx={{ fontWeight: 600 }}>
								SoftSkill:{}
							</Typography>
						) : (
							<>
								<Typography variant="body2" sx={{ fontWeight: 600 }}>
									Module/Lesson:
								</Typography>
								<Typography variant="body2" sx={{ fontWeight: 300 }}>
									{studentData.title}
								</Typography>
							</>
						)}

						<Typography
							variant="body2"
							sx={{ fontWeight: 600, marginTop: "1rem" }}
						>
							Feedback about the course :
						</Typography>
						<Typography variant="body2" sx={{ fontWeight: 300 }}>
							{studentData.text}
						</Typography>
					</CardContent>
				</Card>
			</Stack>
			<MentorFeedBackModal studentData={studentData} />
		</Stack>
	);
};

export default StudentProfileModal;
