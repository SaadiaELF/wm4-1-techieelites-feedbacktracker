import React, { useState } from "react";
import { Stack, Card, Avatar, IconButton, CardHeader } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BlackChip from "./BlackChip";
import RedChip from "./RedChip";
import { useNavigate } from "react-router-dom";

const StudentInfo = ({ studentName, studentAvatar }) => {
	const navigate = useNavigate();
	return (
		<Stack
			spacing={2}
			sx={{
				alignItems: "end",
				top: 70,
				position: "relative",
			}}
		>
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
						<IconButton
							aria-label="settings"
							onClick={() => {
								navigate("/studentProfile");
							}}
						>
							<MoreVertIcon />
						</IconButton>
					}
					title={studentName}
					subheader={
						<Stack
							spacing={1}
							direction="row"
							sx={{ justifyContent: "start", marginTop: "0.85rem" }}
						>
							<RedChip label="Module" />
							<BlackChip label="Soft Skill" />
						</Stack>
					}
				/>
			</Card>
		</Stack>
	);
};

export default StudentInfo;
