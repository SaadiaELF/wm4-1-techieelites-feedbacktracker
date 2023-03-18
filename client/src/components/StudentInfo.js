import React, { useState } from "react";
import { Stack, Card, Avatar, CardHeader } from "@mui/material";
import BlackChip from "./BlackChip";
import RedChip from "./RedChip";
import StudentProfile from "./StudentProfile";

const StudentInfo = ({ studentId, studentName, studentAvatar }) => {
	const [studentData, setStudentData] = useState({});

	const getStudentFeedbackById = async () => {
		try {
			const user = JSON.parse(localStorage.getItem("user"));

			const res = await fetch(`/api/feedback/student/${studentId}`, {
				headers: { authorization: `Bearer ${user.token}` },
			});
			const data = await res.json();
			setStudentData(data);
		} catch {
			(error) => {
				console.error(error);
			};
		}
	};

	React.useEffect(() => {
		getStudentFeedbackById();
	}, []);
	return (
		<Card
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				backgroundColor: "#F2EFF0",
				minHeight: 90,
				width: "100%",
				position: "relative",
			}}
		>
			<CardHeader
				id={studentId}
				avatar={
					<Avatar
						sx={{
							width: 70,
							height: 70,
							zIndex: 1,
						}}
						src={studentAvatar}
						alt="avatar"
					></Avatar>
				}
				action={
					studentData.text && <StudentProfile studentData={studentData} />
				}
				title={studentName}
				subheader={
					studentData.text && (
						<Stack
							spacing={1}
							direction="row"
							sx={{ justifyContent: "start", marginTop: "0.85rem" }}
						>
							{studentData.module_Type === "pd" ? (
								<BlackChip label="Soft Skill" />
							) : (
								<RedChip
									component="a"
									label={studentData.title}
									href={studentData.module_url}
									target="_blank"
									clickable
								/>
							)}
						</Stack>
					)
				}
			/>
		</Card>
	);
};

export default StudentInfo;
