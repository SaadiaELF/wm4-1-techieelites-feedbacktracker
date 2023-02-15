import * as React from "react";
import Typography from "@mui/material/Typography";

const WelcomeMsg = ({ message }) => (
	<Typography
		variant="h4"
		sx={{
			fontSize: { xs: 16, md: 32 },
		}}
		align="center"
	>
		{message}
	</Typography>
);

export default WelcomeMsg;
