import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import StudentDashboard from "./pages/StudentDashboard";
import MentorDashboard from "./pages/MentorDashboard";
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
			<Route path="/login" element={<Login />} />
			<Route path="/about" element={<About />} />
			<Route path="/student" element={<StudentDashboard theme={theme} />} />
			<Route path="/mentor" element={<MentorDashboard theme={theme} />} />
		</Routes>
	</div>
);

export default App;
