/* eslint-disable linebreak-style */
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
		<CssBaseline />
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
		</main>
    </ThemeProvider>
	);
}