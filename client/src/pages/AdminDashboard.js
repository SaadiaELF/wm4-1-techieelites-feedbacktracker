import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import WelcomeMsg from "../components/WelcomeMsg";
import Profile from "../components/Profile";
import StudentInfo from "../components/StudentInfo";
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
			<StudentInfo student={user.student_name} />
		</Stack>
	</ThemeProvider>
	);
};
export default AdminDashboard;

