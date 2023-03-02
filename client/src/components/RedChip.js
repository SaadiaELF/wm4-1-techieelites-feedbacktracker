import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

const RedChip = styled(Chip)(({ theme }) => ({
	color: theme.palette.getContrastText("#EE4344"),
	textTransform: "none",
	backgroundColor: "#EE4344",
}));

export default RedChip;
