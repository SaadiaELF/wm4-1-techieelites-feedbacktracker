import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import WelcomeMsg from "../components/WelcomeMsg";
import Profile from "../components/Profile";
import FeedbackModal from "../components/FeedbackModal";
import Progress from "../components/Progress";
import { Upload } from "upload-js";

const StudentDashboard = ({ theme }) => {
	const [user, setUser] = React.useState({});
	const [techModule, setTechModule] = React.useState({
		module_id: 0,
		module: "",
		lesson: "",
	});
	const [sofSkill, setSoftSkill] = React.useState("");
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

	const handleModuleChange = (e, newValue) => {
		setTechModule({
			...techModule,
			module: newValue.label,
			module_id: newValue.id,
		});
	};

	const handleLessonChange = (e, newValue) => {
		setTechModule({ ...techModule, lesson: newValue });
	};

	const handleSoftSkillChange = (e, newValue) => {
		setSoftSkill(newValue);
	};

	const getUserById = async () => {
		try {
			const user = JSON.parse(localStorage.getItem("user"));

			const res = await fetch(`/api/users/${user.userId}`, {
				headers: { authorization: `Bearer ${user.token}` },
			});
			const data = await res.json();
			setUser(data[0]);
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
					mentorName={user.mentor_name}
					avatar={user.img_url}
					bio={user.bio}
					handleBioChange={handleBioChange}
					handleAvatarChange={handleAvatarChange}
					onSave={() => updateUserById(user)}
				/>
				<Progress
					techModule={techModule}
					sofSkill={sofSkill}
					handleModuleChange={handleModuleChange}
					handleLessonChange={handleLessonChange}
					handleSoftSkillChange={handleSoftSkillChange}
				/>
				<FeedbackModal techModule={techModule} sofSkill={sofSkill} />
			</Stack>
		</ThemeProvider>
	);
};

export default StudentDashboard;
