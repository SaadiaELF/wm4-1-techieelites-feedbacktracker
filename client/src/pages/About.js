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
import Chioma_Img from "../img/Chioma.jpg";
import Kerim_Img from "../img/Kerim.jpg";
import Saadia_Img from "../img/Saadia.jpg";
import Ali_Img from "../img/Ali.jpg";
import Chris_Img from "../img/Chris.jpg";
import Tony_Img from "../img/Tony.jpg";
import Victor_Img from "../img/Victor.png";

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

				<h2 align="center">Developers</h2>
				<Grid container spacing={4}>
					<Grid item xs={5} sm={5} md={4} margin="auto">
						<Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
							<CardMedia component="img"
								image={Chioma_Img}
								alt="profile_pic" />
							<h2 align="center">Chioma Okeke</h2>

							<Stack direction="row" spacing={{ xs: 1, md: 3 }} sx={{ justifyContent: "center" }}>
								<IconButton color="inherit" target="_blank" size="large"
									href="http://www.linkedin.com/in/chiomajokeke">
									<LinkedInIcon fontSize="large"></LinkedInIcon>
								</IconButton>

								<IconButton color="inherit" target="_blank" size="large"
									href="https://github.com/JanefrancessC">
									<GitHubIcon fontSize="large" />
								</IconButton>
							</Stack>
						</Card>
					</Grid>

					<Grid item xs={5} sm={5} md={4} margin="auto">
						<Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
							<CardMedia component="img"
									image={Kerim_Img}
									alt="profile_pic" />
							<h2 align="center">Kerim Zamir</h2>

							<Stack direction="row" spacing={{ xs: 1, md: 3 }} sx={{ justifyContent: "center" }}>
								<IconButton color="inherit" target="_blank" size="large"
									href="https://www.linkedin.com/in/kerim-zamir-4390a5235/">
									<LinkedInIcon fontSize="large"></LinkedInIcon>
								</IconButton>

								<IconButton color="inherit" target="_blank" size="large"
									href="https://github.com/Arbeits-Sachen">
									<GitHubIcon fontSize="large" />
								</IconButton>
							</Stack>
						</Card>
					</Grid>

					<Grid item xs={5} sm={5} md={4} margin="auto">
						<Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
							<CardMedia component="img"
									image={Saadia_Img}
									alt="profile_pic" />
							<h2 align="center">Saadia El fekak</h2>

							<Stack direction="row" spacing={{ xs: 1, md: 3 }} sx={{ justifyContent: "center" }}>
								<IconButton color="inherit" target="_blank" size="large"
									href="https://www.linkedin.com/in/saadia-el-fekak-5b138780">
									<LinkedInIcon fontSize="large"></LinkedInIcon>
								</IconButton>

								<IconButton color="inherit" target="_blank" size="large"
									href="https://github.com/SaadiaELF">
									<GitHubIcon fontSize="large" />
								</IconButton>
							</Stack>
						</Card>
					</Grid>
				</Grid>
			</Container>

			<Container sx={{ py: 8 }} maxWidth="md">
				<Grid container spacing={4}>
					<Grid item xs={5} sm={5} md={4} margin="auto">
						<Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>

							<h2 align="center">Product Owner</h2>
							<CardMedia component="img"
								image={Ali_Img}
								alt="profile_pic" />
							<h2 align="center">Ali Cagatay</h2>

							<Stack direction="row" spacing={{ xs: 1, md: 3 }} sx={{ justifyContent: "center" }}>
								<IconButton color="inherit" target="_blank" size="large"
									href="https://www.linkedin.com/in/alicagatay/">
									<LinkedInIcon fontSize="large"></LinkedInIcon>
								</IconButton>

								<IconButton color="inherit" target="_blank" size="large"
									href="https://github.com/alicagatay">
									<GitHubIcon fontSize="large" />
								</IconButton>
							</Stack>
						</Card>
					</Grid>

					<Grid item xs={5} sm={5} md={4} margin="auto">
						<Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>

							<h2 align="center">Product Manager</h2>
							<CardMedia component="img"
								image={Chris_Img}
								alt="profile_pic" />
							<h2 align="center">Chris Perrin</h2>

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

							<h2 align="center">Back-End Tech Lead</h2>
							<CardMedia component="img"
								image={Tony_Img}
								alt="profile_pic" />
							<h2 align="center">Tony Beaumont</h2>

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