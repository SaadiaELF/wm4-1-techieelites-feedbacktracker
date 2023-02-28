import React, { useState } from "react";
import { Stack, Card, Avatar, CardContent, Typography } from "@mui/material";
import RedButton from "./RedButton";
import BlackButton from "./BlackButton";

const StudentInfo = () => {
	const [avatar, setAvatar] = useState("");
	const [fullName, setFullName] = useState("Student Name");
	return (
		<Stack
			spacing={2}
			sx={{
				alignItems: "center",
				top: 75,
				position: "relative",
			}}
		>
			<Card
				sx={{
					display: "flex",
					flexDirection: "column",
					backgroundColor: "#F2EFF0",
					maxHeight: 90,
					width: "100%",
				}}
			>
				<Stack spacing={2}>
					<Typography
						sx={{ fontSize: 16, fontWeight: 800, padding: "0.5rem" }}
						variant="p"
						align="center"
					>
						{fullName}
					</Typography>
				</Stack>

				<CardContent>
					<Avatar
						sx={{
							width: 90,
							height: 90,
							zIndex: 3,
							position: "absolute",
						}}
						src={avatar}
						alt="avatar"
					></Avatar>
					<Stack direction="row" sx={{ justifyContent: "end" }}>
						<RedButton size="small" variant="contained">
							Module
						</RedButton>
						<BlackButton size="small" variant="contained">
							Soft Skill
						</BlackButton>
					</Stack>
				</CardContent>
			</Card>
		</Stack>
	);
};

export default StudentInfo;
