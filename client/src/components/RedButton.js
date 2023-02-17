import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const RedButton = styled(Button)(({ theme }) => ({
	margin: 5,
	color: theme.palette.getContrastText("#EE4344"),
	textTransform: "none",
	backgroundColor: "#EE4344",
	"&:hover": {
		color: theme.palette.getContrastText("#cf3a3a"),
		backgroundColor: "#cf3a3a",
	},
}));

export default RedButton;
