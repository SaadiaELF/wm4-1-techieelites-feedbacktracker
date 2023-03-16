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
import BlackButton from "./BlackButton";
import AddUser from "./AddUser";
import { ThemeProvider } from "@mui/material/styles";
import { auto } from "@popperjs/core";

const Profile = ({
	mentorName,
	userName,
	bio,
	avatar,
	handleBioChange,
	handleAvatarChange,
	onSave,
	theme,
}) => {
	const [editable, setEditable] = React.useState(false);
	// const [createUser, setCreateUser] = React.useState(false);
	// const handleAddUser = async () => {
	// 	createUser ? setCreateUser(false) : setCreateUser(true);
	// };

	const user = JSON.parse(localStorage.getItem("user"));
	console.log(user);

	return (
		<Stack
			spacing={2}
			sx={{
				alignItems: "center",
			}}
		>
			<Card
				sx={{
					display: "flex",
					flexDirection: "column",
					backgroundColor: "#F2EFF0",
					minHeight: 230,
					width: "100%",
					justifyContent: "end",
					position: "relative",
					overflow: "visible",
					marginTop: "7rem",
				}}
			>
				<Avatar
					sx={{
						width: 150,
						height: 150,
						zIndex: 1,
						position: "absolute",
						left: 0,
						right: 0,
						top: -110,
						margin: "0 auto",
					}}
					src={avatar}
					alt="avatar"
				></Avatar>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<Typography
						sx={{ paddingBottom: "1rem", marginTop: "1.2rem", fontWeight: 700 }}
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
						<Typography
							variant="body2"
							color="text.secondary"
							align="center"
							sx={{ fontWeight: 900, marginBottom: 5 }}
						>
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
								marginTop: "1.5rem",
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
						<Stack
							sx={{ flexDirection: "row", justifyContent: "space-between" }}
						>
							{/* {user.role === "admin" && (
								<BlackButton
									// sx={{ width: "100px", margin: "1rem", marginTop: "0.5rem" }}
									size="small"
									variant="contained"
									component="label"
									onClick={handleAddUser}
								>
									Add User
								</BlackButton>
							)} */}
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
				{/* {createUser ? <AddUser theme={theme} /> : null} */}
			</Card>
		</Stack>
	);
};

export default Profile;
