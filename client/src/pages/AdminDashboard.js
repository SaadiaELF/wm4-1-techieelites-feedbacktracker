import React from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import WelcomeMsg from "../components/WelcomeMsg";
import Profile from "../components/Profile";
import BlackButton from "../components/BlackButton";
import { Upload } from "upload-js";
import AddUser from "../components/AddUser";

const AdminDashboard = ({ theme }) => {
	const [user, setUser] = React.useState({});
	const upload = Upload({ apiKey: "free" });
	const [createUser, setCreateUser] = React.useState(false);
	const navigate = useNavigate();
	// to handle the adduser button
	const [isHidden, setIsHidden] = React.useState(false);

	const handleHide = () => {
		setIsHidden(true);
	};

	const handleShow = () => {
		setIsHidden(false);
	};

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
			if (res.status !== 200) {
				navigate("/login");
			}
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

	//Add User
	const handleAddUser = async () => {
		createUser ? setCreateUser(false) : setCreateUser(true);
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

				<Stack spacing={2} sx={{ position: "relative" }}>
					<Profile
						bio={user.bio}
						handleBioChange={handleBioChange}
						avatar={user.img_url}
						handleAvatarChange={handleAvatarChange}
						onSave={() => updateUserById(user)}
						handleHide={handleHide}
						handleShow={handleShow}
					/>
					{!isHidden && (<BlackButton
						sx={{
							width: { xs: "80px", md: "115px" },
							position: "absolute",
							left: 10,
							right: 0,
							top: 275,
							margin: "0 auto",
						}}
						size="small"
						variant="contained"
						component="label"
						onClick={handleAddUser}
					>
						Add User
					</BlackButton>) }

					{createUser ? <AddUser theme={theme} /> : null}
				</Stack>
			</Stack>
		</ThemeProvider>
	);
};
export default AdminDashboard;
