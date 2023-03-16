const  React = require("react");
const { render } =require("@testing-library/react");
const App = require('../src/App')

test("renders the login page", () => {
	render(<App />);
});