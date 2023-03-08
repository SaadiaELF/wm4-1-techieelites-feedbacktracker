import * as React from "react";
import {
	Stack,
	Card,
	CardContent,
	Typography,
	Autocomplete,
	TextField,
} from "@mui/material";

const Progress = ({
	techModule,
	softSkill,
	handleLessonChange,
	handleModuleChange,
	handleSoftSkillChange,
}) => {
	const date = new Date();
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	const [modules, setModules] = React.useState([]);

	const softSkills = [
		"Time management",
		"Public speaking",
		"Critical thinking",
	];

	const selectedTechModule = modules.find((i) => i.title === techModule.module);

	const getAllModules = async () => {
		try {
			const res = await fetch("/api/modules");
			const data = await res.json();
			setModules(data);
		} catch {
			(error) => {
				console.error(error);
			};
		}
	};

	React.useEffect(() => {
		getAllModules();
	}, []);

	return (
		<Stack
			spacing={2}
			sx={{
				alignItems: "center",
				top: 75,
				position: "relative",
			}}
		>
			<Card
				sx={{
					display: "flex",
					flexDirection: "column",
					backgroundColor: "#F2EFF0",
					minHeight: 230,
					width: "100%",
				}}
			>
				<CardContent>
					<Typography variant="body1" align="center">
						My progress
					</Typography>
					<Typography variant="body2" color="text.secondary" align="center">
						{date.toLocaleDateString("en-GB", options)}
					</Typography>

					<Stack spacing={2} sx={{ paddingTop: "1rem" }}>
						<Autocomplete
							sx={{ backgroundColor: "#FFFFFF" }}
							size="small"
							id="module"
							options={modules.map((i) => i.title)}
							renderInput={(params) => <TextField {...params} label="Module" />}
							onChange={handleModuleChange}
						/>
						<Autocomplete
							sx={{ backgroundColor: "#FFFFFF" }}
							size="small"
							id="lesson"
							options={selectedTechModule?.lessons || []}
							disabled={techModule.module ? false : true}
							renderInput={(params) => <TextField {...params} label="Lesson" />}
							onChange={handleLessonChange}
						/>
						<Autocomplete
							sx={{ backgroundColor: "#FFFFFF" }}
							size="small"
							id="soft-skill"
							options={softSkills}
							renderInput={(params) => (
								<TextField {...params} label="Soft Skill" />
							)}
							onChange={handleSoftSkillChange}
						/>
					</Stack>
				</CardContent>
			</Card>
		</Stack>
	);
};

export default Progress;
