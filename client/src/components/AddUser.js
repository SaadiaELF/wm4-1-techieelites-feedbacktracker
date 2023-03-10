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
	const [fullName, setFullName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [role, setRole] = React.useState(1);

    const handleNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };


    const addUser = (event) => {
        event.preventDefault();
        const newItem =
        {
            full_name: fullName,
            email: email,
            role: role,
        };

        fetch("/api/admin", {
            method: "POST",
            body: JSON.stringify(newItem),
            headers: {
            "Content-Type": "application/json",
            },
        });
    };

    return(
        <ThemeProvider theme={theme}>
            <form action="" method="post" className="form-example" onSubmit={addUser}>
                <Stack spacing={2}>
                    <TextField id="outlined-basic" label="Enter Full Name" variant="outlined" type="text" value={fullName} onChange={handleNameChange} required />
                    <TextField id="outlined-basic" label="Enter Email" variant="outlined" type="email" value={email} onChange={handleEmailChange} required />
                    <FormLabel id="demo-row-radio-buttons-group-label">Role</FormLabel>
                    <RadioGroup value={role} onChange={handleRoleChange} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                        <FormControlLabel name="student" value={"student"} control={<Radio required />} label="Student" />
                        <FormControlLabel name="mentor" value={"mentor"} control={<Radio />} label="Mentor" />
                        <FormControlLabel name="admin" value={"admin"} control={<Radio />} label="Admin" />
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