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

const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText("#EE4344"),
	textTransform: "none",
	backgroundColor: "#EE4344",
	"&:hover": {
		color: theme.palette.getContrastText("#F2EFF0"),
		backgroundColor: "#F2EFF0",
	},
}));

const Profile = () => {
	const [editable, setEditable] = React.useState(false);

	return (
		<Stack sx={{ alignItems: "center", top: 20, position: "relative" }}>
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
					height: 200,
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
							defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
					consequat ipsum."
						/>
					) : (
						<Typography variant="body2" color="text.secondary" align="center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
							consequat ipsum.
						</Typography>
					)}
					<Typography variant="body1" align="center">
						Mentor Name
					</Typography>
				</CardContent>
				<CardActions sx={{ justifyContent: "flex-end" }}>
					<ColorButton size="small" variant="contained">
						Edit Profile
					</ColorButton>
				</CardActions>
			</Card>
		</Stack>
	);
};

export default Profile;
