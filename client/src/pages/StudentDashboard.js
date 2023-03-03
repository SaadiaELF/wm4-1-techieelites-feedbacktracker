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
	const [bio, setBio] = React.useState(user.bio);
	const [techModule, setTechModule] = React.useState({
		module: "",
		lesson: "",
	});
	const [sofSkill, setSoftSkill] = React.useState("");
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
			console.log(data);
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
		setBio(e.target.value);
	};
	function handleModuleChange(e, newValue) {
		setTechModule({ ...techModule, module: newValue });
	}
	function handleLessonChange(e, newValue) {
		setTechModule({ ...techModule, lesson: newValue });
	}
	function handleSoftSkillChange(e, newValue) {
		setSoftSkill(newValue);
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
				<Profile
					mentorName={user.mentor_name}
					avatar={user.img_url || avatarUrl}
					bio={bio}
					handleBioChange={handleBioChange}
					onFileSelected={onFileSelected}
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
