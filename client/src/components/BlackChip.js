import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

const BlackChip = styled(Chip)(({ theme }) => ({
	color: theme.palette.getContrastText("#231F20"),
	textTransform: "none",
	backgroundColor: "#231F20",

}));

export default BlackChip;
