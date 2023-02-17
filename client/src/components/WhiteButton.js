import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

const WhiteButton = styled(Button)(({ theme }) => ({
	margin: 5,
	color: theme.palette.getContrastText("#FFFFFF"),
	textTransform: "none",
	backgroundColor: "#FFFFFF",
	"&:hover": {
		color: theme.palette.getContrastText("#dbd9d9"),
		backgroundColor: "#dbd9d9",
	},
}));

export default WhiteButton;