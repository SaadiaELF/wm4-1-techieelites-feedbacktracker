import React, { useState } from "react";
import { Stack, Card, Avatar, CardContent, Typography } from "@mui/material";
import BlackChip from "./BlackChip";
import RedChip from "./RedChip";

const StudentInfo = () => {
	const [avatar, setAvatar] = useState("");
	const [fullName, setFullName] = useState("Student Name");
	return (
		<Stack
			spacing={2}
			sx={{
				alignItems: "end",
				top: 60,
				position: "relative",
			}}
		>
			<Avatar
				sx={{
					width: 90,
					height: 90,
					zIndex: 1,
					left: 0,
					bottom: 0,
					position: "absolute",
				}}
				src={avatar}
				alt="avatar"
			></Avatar>
			<Card
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					backgroundColor: "#F2EFF0",
					minHeight: 90,
					width: "90%",
					position: "relative",
				}}
			>
				<CardContent sx={{ padding: "0 1rem !important" }}>
					<Typography
						sx={{marginLeft: "3rem", marginBottom: '0.5rem'}}
						variant="body1"
						
					>
						{fullName}
					</Typography>
					<Stack spacing={1} direction="row" sx={{ justifyContent: "end" }}>
						<RedChip label="	Module" />
						<BlackChip label="	Soft Skill" />
					</Stack>
				</CardContent>
			</Card>
		</Stack>
	);
};

export default StudentInfo;
