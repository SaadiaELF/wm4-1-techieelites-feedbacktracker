import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Avatar } from "@mui/material";
import avatar from "../img/hacker.png";

const RedButton = styled(Button)(({ theme }) => ({
	margin: 5,
	color: theme.palette.getContrastText("#EE4344"),
	textTransform: "none",
	backgroundColor: "#EE4344",
	"&:hover": {
		color: theme.palette.getContrastText("#cf3a3a"),
		backgroundColor: "#cf3a3a",
	},
}));

const WhiteButton = styled(Button)(({ theme }) => ({
	margin: 5,
	color: theme.palette.getContrastText("#FFFFFF"),
	textTransform: "none",
	backgroundColor: "#FFFFFF",
	"&:hover": {
		color: theme.palette.getContrastText("#dbd9d9"),
		backgroundColor: "#dbd9d9",
	},
}));



const Profile = () => {
	const [editable, setEditable] = React.useState(false);
	const [bio, setBio] = React.useState(
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec consequat ipsum."
	);
	
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
					top: 80,
				}}
			>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					{editable ? (
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
