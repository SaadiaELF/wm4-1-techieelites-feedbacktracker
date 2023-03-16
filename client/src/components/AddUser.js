import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import BlackButton from "./BlackButton";
import Alert from "@mui/material/Alert";
import { ThemeProvider } from "@mui/material/styles";
import RedButton from "./RedButton";

const AddUser = ({ theme, hideCreateUser }) => {
	const [newUser, setNewUser] = React.useState({
		full_name: "",
		email: "",
		role: "",
	});
	const [errorMessage, setErrorMessage] = React.useState("");
	const [successMessage, setSuccessMessage] = React.useState("");

	const handleNameChange = (event) => {
		setErrorMessage("");
		setSuccessMessage("");
		setNewUser({ ...newUser, full_name: event.target.value });
	};

	const handleEmailChange = (event) => {
		setErrorMessage("");
		setSuccessMessage("");
		setNewUser({ ...newUser, email: event.target.value });
	};

	const handleRoleChange = (event) => {
		setErrorMessage("");
		setSuccessMessage("");
		setNewUser({ ...newUser, role: event.target.value });
	};

	const addUser = (event) => {
		event.preventDefault();
		const user = JSON.parse(localStorage.getItem("user"));
		//check if user role is admin
		if (user.role !== "admin") {
			setErrorMessage("Only admin can create a new user.");
			return;
		}
		fetch("/api/users", {
			method: "POST",
			body: JSON.stringify(newUser),
			headers: {
				authorization: `Bearer ${user.token}`,
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (!response.ok) {
					response.json().then((error) => {
						setErrorMessage(error.error);
					});
				} else if (response.status === 201) {
					response.json().then((data) => {
						setSuccessMessage(data.message);
					});
				}
			})
			.then(() =>
				setNewUser({
					full_name: "",
					email: "",
					role: "",
				})
			)
			.catch((error) => {
				console.error(error);
				setErrorMessage(error.message);
			});
	};

	return (
		<ThemeProvider theme={theme}>
			<form action="" method="post" className="form-example" onSubmit={addUser}>
				<Stack spacing={2}>
					<span>
						{errorMessage && <Alert severity="error">{errorMessage}</Alert>}
						{successMessage && (
							<Alert severity="success">{successMessage}</Alert>
						)}
					</span>

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
						<RedButton onClick={hideCreateUser}>Cancel</RedButton>
					</div>
				</Stack>
			</form>
		</ThemeProvider>
	);
};
export default AddUser;
