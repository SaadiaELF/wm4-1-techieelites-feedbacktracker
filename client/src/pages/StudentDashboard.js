import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import WelcomeMsg from "../components/WelcomeMsg";
import Profile from "../components/Profile";
import FeedbackModal from "../components/FeedbackModal";
import Progress from "../components/Progress";

const StudentDashboard = ({ theme }) => {
	const [bio, setBio] = React.useState(
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec consequat ipsum."
	);
	const [techModule, setTechModule] = React.useState({
		module: "",
		lesson: "",
	});

	const [sofSkill, setSoftSkill] = React.useState("");

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
				<WelcomeMsg message="Welcome student name!👋" />
				<Profile
					mentorName="mentor name"
					bio={bio}
					handleBioChange={handleBioChange}
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
