import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

function Copyright() {
	return (
		<Typography
			variant="body"
			color="text.secondary"
			sx={{ textAlign: "center", margin: "0.5rem" }}
		>
			{"© All rights reserved | Registered in "}
			<Link
				color="inherit"
				href="https://register-of-charities.charitycommission.gov.uk/charity-details/?regid=1174929&subid=0"
			>
				UK
			</Link>
			{" and "}
			<Link
				color="inherit"
				href="https://www.oscr.org.uk/about-charities/search-the-register/charity-details?number=SC050753"
			>
				Scottish
			</Link>
			{" charity | Send website "}
			<Link
				color="inherit"
				href="contact@codeyourfuture.io"
				post="contact@codeyourfuture.io"
			>
				feedback
			</Link>
		</Typography>
	);
}

function Footer() {
	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: "#f2eff0",
				width: "100%",
				marginTop: "5rem",
			}}
		>
			<Container
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					maxWidth: "72rem",
				}}
			>
				<Typography
					variant="body"
					sx={{ textAlign: "center", padding: "1rem" }}
				>
					Follow Us On:
				</Typography>
				<Stack
					direction="row"
					spacing={{ xs: 1, md: 3 }}
					sx={{ justifyContent: "center" }}
				>
					<IconButton
						color="inherit"
						href="https://www.facebook.com/codeyourfuture.io"
						target="_blank"
						size="large"
						aria-label="Facebook"
					>
						<FacebookIcon fontSize="large"></FacebookIcon>
					</IconButton>

					<IconButton
						color="inherit"
						href="https://twitter.com/CodeYourFuture"
						target="_blank"
						size="large"
						aria-label="Twitter"
					>
						<TwitterIcon fontSize="large"></TwitterIcon>
					</IconButton>

					<IconButton
						color="inherit"
						href="https://www.linkedin.com/company/15224414/admin/"
						target="_blank"
						size="large"
						aria-label="LinkedIn"
					>
						<LinkedInIcon fontSize="large"></LinkedInIcon>
					</IconButton>

					<IconButton
						color="inherit"
						href="https://www.instagram.com/codeyourfuture_"
						target="_blank"
						size="large"
						aria-label="Instagram"
					>
						<InstagramIcon fontSize="large"></InstagramIcon>
					</IconButton>

					<IconButton
						color="inherit"
						href="https://github.com/CodeYourFuture"
						target="_blank"
						size="large"
						aria-label="GitHub"
					>
						<GitHubIcon fontSize="large" />
					</IconButton>
				</Stack>
				<Copyright />
			</Container>
		</Box>
	);
}

export default Footer;
