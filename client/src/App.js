import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
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
		<Navbar />
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/about" element={<About />} />
			<Route path="/student" element={<StudentDashboard theme={theme} />} />
		</Routes>
		<Footer />
	</div>
);

export default App;
