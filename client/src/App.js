import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
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

const App = () => {
	const user = JSON.parse(localStorage.getItem("user"));

	return (
		<div className="App">
			<Navbar />
			<main className="main">
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
					<Route path="/about" element={<About />} />
					<Route
						path={`/student/${user.userId}`}
						element={<StudentDashboard theme={theme} />}
					/>
					<Route
						path={`/mentor/${user.userId}`}
						element={<MentorDashboard theme={theme} />}
					/>
					<Route path="/404" element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default App;
