import { Route, Routes } from "react-router-dom";
import { createTheme } from "@mui/material/styles";

import About from "./pages/About";
import Home from "./pages/Home";
import StudentDashboard from "./pages/StudentDashboard";
import Login from "./pages/Login";

const theme = createTheme({
	components: {
		MuiTypography: {
			defaultProps: {
				fontFamily: ["Raleway", "sans-serif"].join(","),
			},
		},
	},
});

const App = () => (
	<Routes>
		<Route path="/" element={<Login />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/student" element={<StudentDashboard theme={theme} />} />
	</Routes>
);

export default App;
