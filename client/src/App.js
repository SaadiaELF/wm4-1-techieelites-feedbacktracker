/* eslint-disable linebreak-style */
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import "./App.css";


const App = () => (
	<div>
		<div>
			<Navbar />
		</div>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about/this/site" element={<About />} />
		</Routes>
	</div>
);

export default App;