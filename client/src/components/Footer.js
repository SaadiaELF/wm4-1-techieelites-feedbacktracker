import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

function Copyright() {
  return (
    <Typography color="text.secondary" align="center">
      {"© All rights reserved |  Registered "}
      <Link color="inherit" href="https://register-of-charities.charitycommission.gov.uk/charity-details/?regid=1174929&subid=0">
      UK
      </Link>
      {" and "}
      <Link color="inherit" href="https://www.oscr.org.uk/about-charities/search-the-register/charity-details?number=SC050753">
      Scottish
      </Link>
      {" charity | Send website "}
      <Link color="inherit" href="contact@codeyourfuture.io" post="contact@codeyourfuture.io">
      feedback
      </Link>
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <Box component="footer" style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        right: 0 }}>

        <Container maxWidth={"100%"} style={{ backgroundColor: "#f2eff0" }}>
            <Typography variant="h5" align="center"
            padding={"10px"}>
            Follow Us On:
            </Typography>
            <Typography display={"flex"}  justifyContent="center">
            <Link color="inherit" href="https://www.facebook.com/codeyourfuture.io"
            marginLeft={"30%"} marginRight={"1%"}>
                <FacebookIcon fontSize={"large"}>
                </FacebookIcon>
            </Link>

            <Link color="inherit" href="https://twitter.com/CodeYourFuture"
                marginLeft={"1%"} marginRight={"1%"}>
                <TwitterIcon fontSize={"large"}>
                </TwitterIcon>
            </Link>

            <Link color="inherit" href="https://www.linkedin.com/company/15224414/admin/"
                marginLeft={"1%"} marginRight={"1%"}>
                <LinkedInIcon fontSize={"large"}>
                </LinkedInIcon>
            </Link>

            <Link color="inherit" href="https://www.instagram.com/codeyourfuture_"
                marginLeft={"1%"} marginRight={"1%"}>
                <InstagramIcon fontSize={"large"}>
                </InstagramIcon>
            </Link>

            <Link color="inherit" href="https://github.com/CodeYourFuture"
                marginLeft={"1%"} marginRight={"30%"}>
                <GitHubIcon fontSize={"large"}>
                </GitHubIcon>
            </Link>
            </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;