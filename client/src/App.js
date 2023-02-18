import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import { createTheme } from "@mui/material/styles";

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
	<div className="App">
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/about/this/site" element={<About />} />
			<Route path="/student" element={<StudentDashboard theme={theme} />} />
		</Routes>
	</div>
);

export default App;
