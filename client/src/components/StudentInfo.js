import React, { useState } from "react";
import { Stack, Card, Avatar, CardContent } from "@mui/material";
import RedButton from "./RedButton";
import BlackButton from "./BlackButton";

const StudentInfo = () => {
	const [avatar, setAvatar] = useState("");
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
					minHeight: 100,
					width: "100%",
				}}
			>
				{<h4>Student name</h4>}
				<CardContent>
					<Avatar
						sx={{
							width: 100,
							height: 100,
							zIndex: 3,
							position: "absolute",
						}}
						src={avatar}
						alt="avatar"
					></Avatar>
          <RedButton>Module</RedButton>
          <BlackButton>Course</BlackButton>
				</CardContent>
			</Card>
		</Stack>
	);
};

export default StudentInfo;
