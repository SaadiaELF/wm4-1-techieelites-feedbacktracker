import React, { useState } from "react";
import { Stack, Card, Avatar, CardContent, Typography, Chip } from "@mui/material";
import RedButton from "./RedButton";
import BlackChip from "./BlackChip";

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
						
						// align="center"
					>
						{fullName}
					</Typography>
					<Stack spacing={1} direction="row" sx={{ justifyContent: "end" }}>
						<BlackChip label="	Module" />
						<Chip label="	Soft Skill" />
						{/* <RedButton size="small">Module</RedButton>
						<BlackButton size="small">Soft Skill</BlackButton> */}
					</Stack>
				</CardContent>
			</Card>
		</Stack>
	);
};

export default StudentInfo;
