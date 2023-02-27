import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import StudentDashboard from "./pages/StudentDashboard";
import { createTheme } from "@mui/material/styles";
import "./App.css";

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
		<div>
			<Navbar />
		</div>
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/about/this/site" element={<About />} />
			<Route path="/student" element={<StudentDashboard theme={theme} />} />
			<Route path="/not" element={<h1>404</h1>} />
		</Routes>
	</div>
);

export default App;
