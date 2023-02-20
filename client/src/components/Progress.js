import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Progress = () => {
	const date = new Date();

	return (
		<Stack
			spacing={2}
			sx={{
				alignItems: "center",
				top: 30,
				position: "relative",
			}}
		>
			<Card
				sx={{
					display: "flex",
					flexDirection: "column",
					backgroundColor: "#F2EFF0",
					minHeight: 230,
					width: "100%",
					position: "relative",
					top: 75,
				}}
			>
				<CardContent>
					<Typography variant="body1" align="center">
						My progress
					</Typography>
					<Typography variant="body2" color="text.secondary" align="center">
						{date.toLocaleDateString()}
					</Typography>
				</CardContent>
			</Card>
		</Stack>
	);
};

export default Progress;
