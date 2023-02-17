import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";

const App = () => (
	<div className="App">
		
	<Routes>
		<Route path="/" element={<Login />} />
		<Route path="/about/this/site" element={<About />} />
	</Routes>
	</div>
);

export default App;


