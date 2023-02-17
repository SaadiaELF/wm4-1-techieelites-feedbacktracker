import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => (
	<div className="App">
		{/* <Login /> */}
	<Routes>
		<Route path="/" element={<Login />} />
		<Route path="/about/this/site" element={<About />} />
	</Routes>
	</div>
);

export default App;


