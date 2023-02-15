import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import StudentDashboard from "./pages/StudentDashboard";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/student" element={<StudentDashboard />} />
	</Routes>
);

export default App;
