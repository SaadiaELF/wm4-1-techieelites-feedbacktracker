import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const NeutralButton = styled(Button)(({ theme }) => ({
	margin: 5,
	color: theme.palette.getContrastText("#F2EFF0"),
	textTransform: "none",
	backgroundColor: "#F2EFF0",
	"&:hover": {
		color: theme.palette.getContrastText("#231F20"),
		backgroundColor: "#231F20",
	},
}));

export default NeutralButton;
