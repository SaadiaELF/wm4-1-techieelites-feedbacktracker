import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import About from "./pages/About";
import Login from "./pages/Login";
=======
import { createTheme } from "@mui/material/styles";

import About from "./pages/About";
import Home from "./pages/Home";
import StudentDashboard from "./pages/StudentDashboard";

const theme = createTheme({
	components: {
		MuiTypography: {
			defaultProps: {
				fontFamily: ["Raleway", "sans-serif"].join(","),
			},
		},
	},
});
>>>>>>> dev

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


