import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import WelcomeMsg from "../components/WelcomeMsg";
import Profile from "../components/Profile";
import StudentInfo from "../components/StudentInfo";
import { Upload } from "upload-js";

const MentorDashboard = ({ theme }) => {
	const [user, setUser] = React.useState({});
	const [students, setStudents] = React.useState([]);
	const upload = Upload({ apiKey: "free" });

	async function handleAvatarChange(event) {
		const [file] = event.target.files;
		const { fileUrl } = await upload.uploadFile(file, {
			onBegin: ({ cancel }) => console.log("File upload started!"),
			onProgress: ({ progress }) =>
				console.log(`File uploading... ${progress}%`),
		});
		setUser((user) => ({ ...user, img_url: fileUrl }));
	}

	const handleBioChange = (e) => {
		setUser((user) => ({ ...user, bio: e.target.value }));
	};

	const getUserById = async () => {
		try {
			const user = JSON.parse(localStorage.getItem("user"));

			const res = await fetch(`/api/users/${user.userId}`, {
				headers: { authorization: `Bearer ${user.token}` },
			});
			const data = await res.json();
			setUser(data[0]);
			setStudents(
				data.map((user) => {
					return {
						studentId: user.student_id,
						student_name: user.student_name,
						student_avatar: user.img_url,
					};
				})
			);
		} catch {
			(error) => {
				console.error(error);
			};
		}
	};

	React.useEffect(() => {
		getUserById();
	}, []);

	//update user profile
	const updateUserById = async (userData) => {
		try {
			const user = JSON.parse(localStorage.getItem("user"));

			const res = await fetch(`/api/users/${user.userId}`, {
				method: "PUT",
				body: JSON.stringify(userData),
				headers: {
					authorization: `Bearer ${user.token}`,
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
			console.log(data);
		} catch {
			(error) => {
				console.error(error);
			};
		}
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
				<Profile
					bio={user.bio}
					handleBioChange={handleBioChange}
					avatar={user.img_url}
					handleAvatarChange={handleAvatarChange}
					onSave={() => updateUserById(user)}
				/>
				{students.map((student, index) => (
					<StudentInfo
						key={index}
						studentName={student.student_name}
						studentAvatar={student.student_avatar}
						id={student.student_id}
					/>
				))}
			</Stack>
		</ThemeProvider>
	);
};
export default MentorDashboard;
