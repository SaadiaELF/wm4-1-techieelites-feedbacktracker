import React, { useState } from "react";
import {Stack, CardContent, Typography, Card } from "@mui/material";


const MentorFeedBack = ({mentorId}) => {
    	const [mentorData, setMentorData] = useState({});

			const getMentorFeedbackById = async () => {
				try {
					const user = JSON.parse(localStorage.getItem("user"));

					const res = await fetch(`/api/feedback/mentor/${mentorId}`, {
						headers: { authorization: `Bearer ${user.token}` },
					});
                    const data = await res.json();
					setMentorData(data);
				} catch {
					(error) => {
						console.error(error);
					};
				}
			};

			React.useEffect(() => {
				getMentorFeedbackById();
			}, [mentorId]);
    return (
			<Stack>
				<Card
					sx={{
						display: "flex",
						flexDirection: "column",
						backgroundColor: "#F2EFF0",
						minHeight: 100,
						width: "100%",
					}}
				>
					<CardContent>
						<Typography
							variant="body1"
							align="center"
							sx={{ fontWeight: 600, marginBottom: "1rem" }}
						>
							Mentor Feedback
						</Typography>
						{!mentorData.mentorId ? (
							<Typography
								variant="body2"
								align="center"
								sx={{ fontWeight: 300 }}
							>
								no recent feedback to show
							</Typography>
						) : (
							<>
								{mentorData.module_type === "pd" ? (
									<Typography variant="body2" sx={{ fontWeight: 600 }}>
										SoftSkill:{}
									</Typography>
								) : (
									<>
										<Typography variant="body2" sx={{ fontWeight: 600 }}>
											Module/Lesson:
										</Typography>
										<Typography variant="body2" sx={{ fontWeight: 300 }}>
											{mentorData.title}
										</Typography>
									</>
								)}
								<Typography variant="body2" sx={{ fontWeight: 600 }}>
									Mentor :
								</Typography>
								<Typography variant="body2" sx={{ fontWeight: 300 }}>
									{mentorData.full_name}
								</Typography>
								<Typography variant="body2" sx={{ fontWeight: 600 }}>
									Feedback about the course :
								</Typography>
								<Typography variant="body2" sx={{ fontWeight: 300 }}>
									{mentorData.text}
								</Typography>
							</>
						)}
					</CardContent>
				</Card>
			</Stack>
		);
}

export default MentorFeedBack