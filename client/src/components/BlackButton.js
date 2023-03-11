import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const BlackButton = styled(Button)(({ theme }) => ({
	margin: 5,
	color: theme.palette.getContrastText("#231F20"),
	textTransform: "none",
	backgroundColor: "#231F20",
	"&:hover": {
		color: theme.palette.getContrastText("#322D2E"),
		backgroundColor: "#322D2E",
	},
}));

export default BlackButton;
