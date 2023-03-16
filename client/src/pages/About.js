
import Grid from "@mui/material/Grid";
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
					About
					</Typography>
					<Typography
						variant="body1"
						align="justify"
						sx={{ fontSize: { xs: 16, md: 20 } }}
						paragraph
					>
						When a mentor sits down with a student to help them out, they may
						not know exactly what the student is trying to work on in terms of
						soft and technical skills. This makes it hard for the mentor to know
						how to support the corresponding student.
					</Typography>
					<Typography
						variant="body1"
						align="justify"
						sx={{ fontSize: { xs: 16, md: 20 } }}
						paragraph
					>
						To solve this issue we worked on a feedback tracker that can help
						students and mentors give feedback on certain subjects.
					</Typography>
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
