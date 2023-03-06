import React, { useState } from "react";
import {
	Stack,
	Card,
	Avatar,
	CardContent,
	Typography,
	Button,
} from "@mui/material";
import BlackChip from "./BlackChip";
import RedChip from "./RedChip";
import { useNavigate } from "react-router-dom";
import NeutralButton from "./NeutralButton";

const StudentInfo = ({ student }) => {
	const [avatar, setAvatar] = useState("");
	const navigate = useNavigate();
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
					width: "100%",
					position: "relative",
				}}
			>
				<CardContent sx={{ padding: "0 1rem !important" }}>
					<NeutralButton
						onClick={() => {
							navigate("/studentProfile");
						}}
						sx={{ marginLeft: "6rem", marginBottom: "0.5rem" }}
						variant="body1"
					>
						{student}
					</NeutralButton>

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
