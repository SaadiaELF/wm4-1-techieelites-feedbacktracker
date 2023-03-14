import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import BlackButton from "./BlackButton";
import { ThemeProvider } from "@mui/material/styles";

const AddUser = ({ theme }) => {
	const [newUser, setNewUser] = React.useState({
		full_name: "",
		email: "",
		role: "",
	});

	const handleNameChange = (event) => {
		setNewUser({ ...newUser, full_name: event.target.value });
	};

	const handleEmailChange = (event) => {
		setNewUser({ ...newUser, email: event.target.value });
	};

	const handleRoleChange = (event) => {
		setNewUser({ ...newUser, role: event.target.value });
	};

	const addUser = (event) => {
		event.preventDefault();

		const user = JSON.parse(localStorage.getItem("user"));

		fetch("/api/users", {
			method: "POST",
			body: JSON.stringify(newUser),
			headers: {
				authorization: `Bearer ${user.token}`,
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then(() =>
				setNewUser({
					full_name: "",
					email: "",
					role: "",
				})
			);
	};

	return (
		<ThemeProvider theme={theme}>
			<form action="" method="post" className="form-example" onSubmit={addUser}>
				<Stack spacing={2}>
					<TextField
						id="outlined-basic"
						label="Enter Full Name"
						variant="outlined"
						type="text"
						value={newUser.full_name}
						onChange={handleNameChange}
						required
					/>
					<TextField
						id="outlined-basic"
						label="Enter Email"
						variant="outlined"
						type="email"
						value={newUser.email}
						onChange={handleEmailChange}
						required
					/>
					<FormLabel id="demo-row-radio-buttons-group-label">Role</FormLabel>
					<RadioGroup
						value={newUser.role}
						required
						onChange={handleRoleChange}
						row
						aria-labelledby="demo-row-radio-buttons-group-label"
						name="row-radio-buttons-group"
					>
						<FormControlLabel
							name="student"
							value={"student"}
							control={<Radio />}
							label="Student"
						/>
						<FormControlLabel
							name="mentor"
							value={"mentor"}
							control={<Radio />}
							label="Mentor"
						/>
						<FormControlLabel
							name="admin"
							value={"admin"}
							control={<Radio />}
							label="Admin"
						/>
					</RadioGroup>

					<div className="form-example">
						<BlackButton type="submit" value="Create_User">
							Create User
						</BlackButton>
					</div>
				</Stack>
			</form>
		</ThemeProvider>
	);
};
export default AddUser;
