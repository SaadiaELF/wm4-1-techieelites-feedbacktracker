import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

const WelcomeMsg = ({ message }) => (
	<Card>
		<Typography
			variant="h4"
			sx={{
				fontSize: { xs: 20, md: 26 },
				fontWeight: 700,
				textAlign: "center",
				margin: 0,
				backgroundColor: "#F2EFF0",
				padding: "0.8rem",
			}}
		>
			{message}
		</Typography>
	</Card>
);

export default WelcomeMsg;
