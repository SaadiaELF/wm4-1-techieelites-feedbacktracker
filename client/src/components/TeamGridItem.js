import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function TeamGridItem({ img, devName, role, linkedIn, github }) {
	console.log(img);
	return (
		<Grid item xs={6} sm={5} md={4} margin="auto">
			<Card
				sx={{
					minHeight: "400px",
					display: "flex",
					flexDirection: "column",
					backgroundColor: "#f2eff0",
				}}
			>
				<Typography
					component="h2"
					variant="h3"
					align="center"
					color="text.primary"
					sx={{
						fontSize: { xs: 16, md: 18 },
						fontWeight: 500,
						p: "0.8rem 0 0",
					}}
					gutterBottom
				>
					{role}
				</Typography>
				<CardMedia
					component="img"
					height={{ xs: "200", md: "300" }}
					image={img}
					alt="profile_pic"
				/>
				<Typography
					component="h2"
					variant="h3"
					align="center"
					color="text.primary"
					sx={{
						fontSize: { xs: 18, md: 20 },
						fontWeight: 600,
						p: "0.8rem 0 0",
					}}
					gutterBottom
				>
					{devName}
				</Typography>
				<Stack direction="row" spacing={1} sx={{ justifyContent: "center" }}>
					<IconButton
						color="inherit"
						target="_blank"
						size="large"
						href={linkedIn}
						sx={{ p: "0.8rem 0.3rem" }}
					>
						<LinkedInIcon fontSize="large"></LinkedInIcon>
					</IconButton>

					<IconButton
						color="inherit"
						target="_blank"
						size="large"
						href={github}
						sx={{ p: "0.5rem 0" }}
					>
						<GitHubIcon fontSize="large" />
					</IconButton>
				</Stack>
			</Card>
		</Grid>
	);
}
