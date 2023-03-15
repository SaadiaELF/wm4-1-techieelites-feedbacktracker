import RedButton from "../components/RedButton";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import TeamGridItem from "../components/TeamGridItem";
import team from "../data/team";
export default function Album({ theme }) {
	return (
		<ThemeProvider theme={theme}>
			<main>
				{/* Hero unit */}
				<Container maxWidth="md" sx={{ p: "3rem 1rem" }}>
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="text.primary"
						sx={{ fontSize: { xs: 25, md: 32 }, fontWeight: 600 }}
						gutterBottom
					>
						About Us
					</Typography>
					<Typography
						variant="body1"
						align="center"
						sx={{ fontSize: { xs: 16, md: 20 } }}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. At
						varius vel pharetra vel turpis nunc. Enim blandit volutpat maecenas
						volutpat blandit aliquam etiam erat.
					</Typography>
					<Stack
						sx={{ pt: 4 }}
						direction="row"
						spacing={2}
						justifyContent="center"
					>
						<RedButton
							size="large"
							variant="contained"
							component="a"
							href="/login"
						>
							LOGIN
						</RedButton>
					</Stack>
				</Container>
				{/* End hero unit */}

				<Container maxWidth="md">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="text.primary"
						sx={{ fontSize: { xs: 25, md: 32 }, fontWeight: 600, pb: 1 }}
						gutterBottom
					>
						Meet the Team
					</Typography>
					<Grid container spacing={4}>
						{team.map((dev, i) => {
							return (
								<TeamGridItem
									key={i}
									devName={dev.devName}
									role={dev.role}
									img={dev.img}
									linkedin={dev.linkenIn}
									github={dev.github}
								/>
							);
						})}
					</Grid>
				</Container>
			</main>
		</ThemeProvider>
	);
}
