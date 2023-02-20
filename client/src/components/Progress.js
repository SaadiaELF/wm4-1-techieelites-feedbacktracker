import * as React from "react";
import {
	Stack,
	Card,
	CardContent,
	Typography,
	Autocomplete,
	TextField,
} from "@mui/material";

const Progress = () => {
	const date = new Date();
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	const [techModule, setTechModule] = React.useState({
		module: "",
		lesson: "",
	});

	const [sofSkill, setSoftSkill] = React.useState("");

	const modules = [
		{ module: "Intro to digital", lessons: [] },
		{
			module: "Fundamentals",
			lessons: [
				"Lesson 1 - Requirements",
				"Lesson 2 - Iteration",
				"Lesson 3 - Delivery",
			],
		},
		{
			module: "Git and Github",
			lessons: [
				"Lesson 1 - Github & Github Desktop",
				"Lesson 2 - The Terminal",
				"Lesson 3 - Git on the Command Line",
				"Lesson 4 - Branches",
			],
		},
		{
			module: "HTML/CSS",
			lessons: [
				"Lesson 1 - Fundamentals • Semantics",
				"Lesson 2 - Forms • Structuring Data",
				"Lesson 3 - Layout • Flexbox • Grid",
				"Lesson 4 - Ship it • Putting it all together",
			],
		},
		{
			module: "JavaScript Core 1",
			lessons: [
				"Lesson 1 - Hello world (of jS)",
				"Lesson 2 - Forms • Structuring Data",
				"Lesson 3 - Layout • Flexbox • Grid",
				"Lesson 4 - Ship it • Putting it all together",
			],
		},
		// "JavaScript Core 1",
		// "JavaScript Core 2",
		// "JavaScript Core 3",
		// "React",
		// "Node.js",
		// "Databases",
		// "Final Projects",
	];
	const softSkills = [
		"Time management",
		"Public speaking",
		"Critical thinking",
	];

	const selectedTechModule = modules.find(
		(i) => i.module === techModule.module
	);

	// handle input change functions
	function handleModuleChange(e, newValue) {
		setTechModule({ ...techModule, module: newValue });
	}
	function handleLessonChange(e, newValue) {
		setTechModule({ ...techModule, lesson: newValue });
	}
	function handleSoftSkillChange(e, newValue) {
		setSoftSkill(newValue);
	}

	console.log({ techModule, sofSkill });

	return (
		<Stack
			spacing={2}
			sx={{
				alignItems: "center",
				top: 30,
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
					position: "relative",
					top: 75,
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
							options={modules.map((i) => i.module)}
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
