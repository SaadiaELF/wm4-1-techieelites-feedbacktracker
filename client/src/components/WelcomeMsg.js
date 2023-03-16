import * as React from "react";
import Typography from "@mui/material/Typography";

const WelcomeMsg = ({ message }) => (
	<Typography
		variant="h4"
		sx={{
			fontSize: { xs: 20, md: 26 },
			fontWeight:700,
			textAlign: "center",
			margin: 0,
		}}
	>
		{message}
	</Typography>
);

export default WelcomeMsg;
