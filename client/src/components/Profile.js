import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import RedButton from "./RedButton";
import WhiteButton from "./WhiteButton";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";
import avatarImg from "../img/hacker.png";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";

const Profile = () => {
	const [editable, setEditable] = React.useState(false);
	const [bio, setBio] = React.useState(
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec consequat ipsum."
	);
	const [avatar, setAvatar] = React.useState(avatarImg);
	// Calling the uploader function from library , the apikey should be stored on on tne .env file
	const uploader = Uploader({ apiKey: "public_W142hdK6nZbvitGGpUnUMKggEffn" });

	const handleBioChange = (e) => {
		setBio(e.target.value);
	};

	return (
		<Stack sx={{ alignItems: "center", top: 30, position: "relative" }}>
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
					m: 1,
					backgroundColor: "#F2EFF0",
					height: 230,
					width: "100%",
					justifyContent: "end",
					position: "relative",
					top: 100,
				}}
			>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					{/* Showing the upload button and making the bio editable only when we click on edit profile  */}
					{editable ? (
						<Stack>
							<UploadButton
								uploader={uploader}
								options={{
									maxFileCount: 1,
									maxFileSizeBytes: 5000000,
									mimeTypes: ["image/jpeg", "image/png"],
								}}
								onComplete={(files) => {
									if (files.length >= 1) {
										setAvatar(files.map((x) => x.fileUrl).join("\n"));
									} else {
										setAvatar(avatarImg);
									}
								}}
							>
								{({ onClick }) => (
									<RedButton size="small" variant="contained" onClick={onClick}>
										Upload a profile picture...
									</RedButton>
								)}
							</UploadButton>

							<TextField
								sx={{ backgroundColor: "#FFFFFF" }}
								id="standard-multiline-static"
								multiline
								rows={2}
								size="small"
								defaultValue={bio}
								fullWidth
								onChange={handleBioChange}
							/>
						</Stack>
					) : (
						<Typography variant="body2" color="text.secondary" align="center">
							{bio}
						</Typography>
					)}
					<Typography variant="body1" align="center">
						Mentor Name
					</Typography>
				</CardContent>
				<CardActions sx={{ justifyContent: "flex-end" }}>
					{/* showing the cancel and save buttons only when we click on edit profile */}
					{editable ? (
						<Stack
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "end",
							}}
						>
							<WhiteButton
								size="small"
								variant="contained"
								onClick={() => setEditable(false)}
							>
								Cancel
							</WhiteButton>
							<RedButton
								size="small"
								variant="contained"
								onClick={() => setEditable(false)}
							>
								Save
							</RedButton>
						</Stack>
					) : (
						<RedButton
							size="small"
							variant="contained"
							onClick={() => setEditable(true)}
						>
							Edit Profile
						</RedButton>
					)}
				</CardActions>
			</Card>
		</Stack>
	);
};

export default Profile;
