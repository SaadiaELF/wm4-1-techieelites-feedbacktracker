import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";

const StudentProfileMentor = ({ studentName, bio, avatar }) => {
	return (
		<Stack
			spacing={2}
			sx={{
				alignItems: "center",
			}}
		>
			<Avatar
				sx={{
					width: 150,
					height: 150,
					zIndex: 1,
					position: "absolute",
				}}
				src={avatar}
				alt="avatar"
			></Avatar>
			<Card
				sx={{
					display: "flex",
					flexDirection: "column",
					backgroundColor: "#F2EFF0",
					minHeight: 150,
					width: "100%",
					justifyContent: "end",
					position: "relative",
					top: 75,
				}}
			>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<Typography variant="body1" align="center" sx={{ padding: "1rem" }}>
						{studentName}
					</Typography>
					<Typography variant="body2" align="center">
						{bio}
					</Typography>
				</CardContent>
			</Card>
		</Stack>
	);
};

export default StudentProfileMentor;
