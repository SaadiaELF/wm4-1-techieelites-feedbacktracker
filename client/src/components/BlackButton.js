import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const BlackButton = styled(Button)(({ theme }) => ({
	margin: 5,
	color: theme.palette.getContrastText("#000000"),
	textTransform: "none",
	backgroundColor: "#000000",
	"&:hover": {
		color: theme.palette.getContrastText("#dbd9d9"),
		backgroundColor: "#dbd9d9",
	},
}));

export default BlackButton;
