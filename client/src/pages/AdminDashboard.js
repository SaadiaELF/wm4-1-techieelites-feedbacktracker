import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import WelcomeMsg from "../components/WelcomeMsg";
import Profile from "../components/Profile";
import BlackButton from "../components/BlackButton";
import { Upload } from "upload-js";


const AdminDashboard = ({ theme }) => {
	const [user, setUser] = React.useState({});
	const [avatarUrl, setAvatarUrl] = React.useState("");
		const upload = Upload({ apiKey: "free" });

		async function onFileSelected(event) {
			const [file] = event.target.files;
			const { fileUrl } = await upload.uploadFile(file, {
				onBegin: ({ cancel }) => console.log("File upload started!"),
				onProgress: ({ progress }) =>
					console.log(`File uploading... ${progress}%`),
			});
			setAvatarUrl(fileUrl);
		}
		const getUserById = async () => {
			try {
				const user = JSON.parse(localStorage.getItem("user"));

				const res = await fetch(`/api/users/${user.userId}`, {
					headers: { authorization: `Bearer ${user.token}` },
				});
				const data = await res.json();
				setUser(data);
			} catch {
				(error) => {
					console.error(error);
				};
			}
		};

		React.useEffect(() => {
			getUserById();
		}, []);

		// handle input change functions
		const handleBioChange = (e) => {
			setUser((user) => ({ ...user, bio: e.target.value }));

		};






		//Upload User
		async function uploadUser(event) {
			const [file] = event.target.files;
			console.log(file);


			//BRUTE FORCE METHOD
			//let holder = {};
			/*
			let jsonArray = [];

				try {
				let reader = new FileReader();
				reader.readAsBinaryString(file);
				reader.onload = function(e) {
					let headers = [];
					let jsonData = [];
					let rows = e.target.result.split("\r\n");
					for (let i = 0; i < rows.length; i++) {
						let cells = rows[i].split(",");
						let rowData = {};
						for(let j=0;j<cells.length;j++){
							if(i==0){
								let headerName = cells[j].trim();
								headers.push(headerName);
							}else{
								let key = headers[j];
								if(key){
									rowData[key] = cells[j].trim();
								}
							}
						}
						//skip the first row (header) data
						if(i!=0){
							jsonData.push(rowData);
						}
					}

					//console.log(jsonData);
					//let jsonDataFormatter = jsonData[0];
					//jsonDataFormatter = (JSON.stringify(jsonData[0])).slice(2);
					//jsonDataFormatter = jsonDataFormatter.substring(0, jsonDataFormatter.length - 5);
					//jsonArray = jsonDataFormatter.split(";");
					//console.log(jsonArray);

					fetch("localhost:3000/users/" + jsonArray[0], {
						method: "post",
						body: {
							"ID": jsonArray[0],
							"Name": jsonArray[1],
							"Email": jsonArray[2],
							"Password": jsonArray[3],
						},
					});
					};
				}catch(e){
					console.error(e);
				}*/
			}

	return (
	<ThemeProvider theme={theme}>
		<Stack
			sx={{
				maxWidth: "380px",
				padding: "1rem",
				margin: "auto",
			}}
			spacing={2}
		>
			<WelcomeMsg message={`Welcome ${user.full_name}!👋`} />
			<Profile bio={user.bio} handleBioChange={handleBioChange} avatar={avatarUrl || user.img_url} onFileSelected={onFileSelected} />


			<Stack spacing={2}>
				<BlackButton
					sx={{ width: "100px" , margin: "1rem", marginTop:"0.5rem" }}
					size="small"
					variant="contained"
					component="label"
				>
					Add Student
					<input
						hidden
						accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
						type="file"
						onChange={uploadUser}
					/>
				</BlackButton>
			</Stack>
		</Stack>
	</ThemeProvider>
	);
};
export default AdminDashboard;