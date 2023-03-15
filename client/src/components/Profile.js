import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import RedButton from "./RedButton";
import WhiteButton from "./WhiteButton";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Avatar } from "@mui/material";
import ResetPasswordForm from "./ResetPasswordForm";

const Profile = ({
	mentorName,
	userName,
	bio,
	avatar,
	handleBioChange,
	handleAvatarChange,
	onSave,
}) => {
	const [editable, setEditable] = React.useState(false);

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
					minHeight: 230,
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
					<Typography
						sx={{ paddingBottom: "1rem" }}
						variant="body1"
						align="center"
					>
						{mentorName ? `My mentor : ${mentorName}` : userName}
					</Typography>
					{/* Showing the upload button and making the bio editable only when we click on edit profile  */}
					{editable ? (
						<Stack spacing={2}>
							<RedButton
								sx={{ margin: "1rem 0 0" }}
								size="small"
								variant="contained"
								component="label"
							>
								<PhotoCamera sx={{ paddingRight: "0.5rem" }} />
								Upload Picture
								<input
									hidden
									accept="image/*"
									multiple
									type="file"
									onChange={handleAvatarChange}
								/>
							</RedButton>
							<TextField
								sx={{ backgroundColor: "#FFFFFF" }}
								label="Bio"
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
				</CardContent>
				<CardActions
					sx={{ padding: "1rem", paddingTop: 0, justifyContent: "flex-end" }}
				>
					{/* showing the cancel and save buttons only when we click on edit profile */}
					{editable ? (
						<Stack
							direction="row"
							sx={{
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
								onClick={(onSave(), () => setEditable(false))}
							>
								Save
							</RedButton>
						</Stack>
					) : (
						<Stack sx={{ flexDirection: "row" }}>
							<ResetPasswordForm />
							<RedButton
								size="small"
								variant="contained"
								onClick={() => setEditable(true)}
							>
								Edit Profile
							</RedButton>
						</Stack>
					)}
				</CardActions>
			</Card>
		</Stack>
	);
};

export default Profile;
