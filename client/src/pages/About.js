/* eslint-disable linebreak-style */
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
		<main>
			{/* Hero unit */}
			<Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
				<Container maxWidth="sm">
					<Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
						About Us
					</Typography>
					<Typography variant="h5" align="center" color="text.secondary" paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At varius vel pharetra vel turpis nunc. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.
					</Typography>
					<Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
						<Button variant="contained" sx={{ bgcolor: "red", ":hover":{ bgcolor:"black" } }}>Main Button</Button>
						<Button variant="outlined" sx={{ bgcolor: "black", color: "white", ":hover":{ color:"black", border: "1px solid black" } }}>Secondary Button</Button>
					</Stack>
				</Container>
			</Box>
			<Container sx={{ py: 8 }} maxWidth="md">
				{/* End hero unit */}
				<h1 align="center">Meet The Team</h1>
				<Grid container spacing={4}>
					<Grid item xs={5} sm={5} md={4} margin="auto">
						<Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
							<CardMedia component="img"
								image="https://source.unsplash.com/random"
								alt="profile_pic" />

							<Stack direction="row" spacing={{ xs: 1, md: 3 }} sx={{ justifyContent: "center" }}>
								<IconButton color="inherit" target="_blank" size="large"
									href="">
									<LinkedInIcon fontSize="large"></LinkedInIcon>
								</IconButton>

								<IconButton color="inherit" target="_blank" size="large"
									href="">
									<GitHubIcon fontSize="large" />
								</IconButton>
							</Stack>
						</Card>
					</Grid>

					<Grid item xs={5} sm={5} md={4} margin="auto">
						<Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
							<CardMedia component="img"
								image="https://source.unsplash.com/random"
								alt="profile_pic" />

							<Stack direction="row" spacing={{ xs: 1, md: 3 }} sx={{ justifyContent: "center" }}>
								<IconButton color="inherit" target="_blank" size="large"
									href="">
									<LinkedInIcon fontSize="large"></LinkedInIcon>
								</IconButton>

								<IconButton color="inherit" target="_blank" size="large"
									href="">
									<GitHubIcon fontSize="large" />
								</IconButton>
							</Stack>
						</Card>
					</Grid>

					<Grid item xs={5} sm={5} md={4} margin="auto">
						<Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
							<CardMedia component="img"
								image="https://source.unsplash.com/random"
								alt="profile_pic" />

							<Stack direction="row" spacing={{ xs: 1, md: 3 }} sx={{ justifyContent: "center" }}>
								<IconButton color="inherit" target="_blank" size="large"
									href="">
									<LinkedInIcon fontSize="large"></LinkedInIcon>
								</IconButton>

								<IconButton color="inherit" target="_blank" size="large"
									href="">
									<GitHubIcon fontSize="large" />
								</IconButton>
							</Stack>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</main>
    </ThemeProvider>
	);
}