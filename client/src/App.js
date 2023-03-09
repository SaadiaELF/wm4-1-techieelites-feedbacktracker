import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import StudentDashboard from "./pages/StudentDashboard";
import MentorDashboard from "./pages/MentorDashboard";
import StudentProfileModal from "./components/StudentProfileModal";
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
		<Navbar />
		<main className="main">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path="/about" element={<About />} />
				<Route path="/student" element={<StudentDashboard theme={theme} />} />
				<Route path="/mentor" element={<MentorDashboard theme={theme} />} />
			</Routes>
		</main>
		<Footer />
	</div>
);

export default App;
