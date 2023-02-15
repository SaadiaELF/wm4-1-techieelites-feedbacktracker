import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const StudentDashboard = ({ theme }) => (
	<ThemeProvider theme={theme}>
		<Typography
			variant="h4"
			sx={{
				fontSize: { xs: 16, md: 32 },
			}}
			align="center"
		>
			Welcome student name!👋
		</Typography>
	</ThemeProvider>
);

export default StudentDashboard;
