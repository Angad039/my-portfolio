import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Avatar,
  Link,
  CssBaseline,
  useMediaQuery,
  Divider,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiSequelize,
  SiTerraform,
  SiAnsible,
  SiDocker,
  SiSplunk,
  SiDynatrace,
  SiGrafana,
} from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import stateStreetLogo from "./assets/stateStreet.png";
import kiitLogo from "./assets/kiit.png";
import resumeUrl from "./assets/AngadSinghResume.pdf";
import GitHubActionIcon from "./assets/git.png";
import kibanaIcon from "./assets/kibana.png";
import materialUIIcon from "./assets/mui.png";
import splunkIcon from "./assets/splunk.jpeg"
import expressIcon from "./assets/express.jpeg"

export default function LandingPage() {
  const [mode, setMode] = useState("light");
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = createTheme({ palette: { mode } });
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleColorMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const sections = ["skills", "experience", "education", "contact"];
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {sections.map((id) => (
          <ListItem key={id} button component={Link} href={`#${id}`}>
            <ListItemText primary={id.toUpperCase()} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const bioText = `Results-driven Full Stack Engineer with 3+ years of experience building scalable, secure web applications using React.js, Node.js, Express.js, and Sequelize. Expertise in DevOps automation, CI/CD pipelines (GitHub Actions, Ansible), containerization (Docker), and real-time infrastructure monitoring.`;

  const skills = [
    "React.js","JavaScript","TypeScript","Material UI","Node.js","Express.js",
    "Sequelize","Terraform","Ansible","GitHub Actions","Docker","AWS","Azure",
    "Splunk","Dynatrace","Grafana","Kibana",
  ];

  const iconMap = {
    "React.js": <SiReact size={24} color="#61DAFB" />,
    JavaScript: <SiJavascript size={24} color="#F7DF1E" />,
    TypeScript: <SiTypescript size={24} color="#3178C6" />,
    "Material UI": (
      <Avatar src={materialUIIcon} variant="rounded" sx={{ width:24,height:24,mr:1 }}/>
    ),
    "Node.js": <SiNodedotjs size={24} color="#339933" />,
    "Express.js": <Avatar src={expressIcon} variant="rounded" sx={{ width:30,height:30,mr:1 }}/>,
    Sequelize: <SiSequelize size={24} color="#52B0E7" />,
    Terraform: <SiTerraform size={24} color="#623CE4" />,
    Ansible: <SiAnsible size={24} color="#EE0000" />,
    "GitHub Actions": (
      <Avatar src={GitHubActionIcon} variant="rounded" sx={{ width:24,height:24,mr:1 }}/>
    ),
    Docker: <SiDocker size={24} color="#2496ED" />,
    AWS: <FaAws size={24} color="#FF9900" />,
    Azure: <FaMicrosoft size={24} color="#0089D6" />,
    Splunk: <Avatar src={splunkIcon} variant="rounded" sx={{ width:24,height:24,mr:1 }}/>,
    Dynatrace: <SiDynatrace size={24} color="#00BB9C" />,
    Grafana: <SiGrafana size={24} color="#F46800" />,
    Kibana: (
      <Avatar src={kibanaIcon} variant="rounded" sx={{ width:24,height:24,mr:1 }}/>
    ),
  };

  const experienceEntries = [
    {
      role: "Senior Associate",
      company: "State Street Corporation",
      date: "Mar 2024 – Present",
      type: "Full-time",
      logo: stateStreetLogo,
      bullets: [
        "CI/CD Pipelines: Utilized Jenkins, GitHub Actions, built and deployed Visualization portal, integrating DevSecOps principles.",
        "Security: Conducted vulnerability scans using Trivy, Black Duck, and Aqua Sec Cloud, and performed static code analysis with Veracode to enhance security.",
        "Image Bakery: Developed Linux OS VM and container images compliant with CIS and NIST standards, used enterprise-wide for secure deployments.",
        "API Integration & Optimization: Designed scalable APIs for configuration compliance and optimized multi-cloud integration."
      ]
    },
    {
      role: "Associate",
      company: "State Street Corporation",
      date: "Jan 2022 – Mar 2024",
      type: "Full-time",
      logo: stateStreetLogo,
      bullets: [
        "Compliance Automation: Built automated checks for server/VM and Docker image compliance, enabling real-time identification of misconfigurations and enforcing security policies.",
        "Cloud & Infrastructure Monitoring: Delivered Terraform insights with real-time visualizations, enabling better observability of project deployments and resource trends across environments.",
        "Log Management: Optimized log forwarding using Splunk to improve monitoring and troubleshooting capabilities. Dynatrace integration for Terraform Enterprise monitoring."
      ]
    }
  ];

  const educationEntries = [
    {
      degree: "B.Tech. in Computer Science",
      institution: "Kalinga Institute of Industrial Technology, Bhubaneswar",
      period: "2018 – 2022",
      logo: kiitLogo,
      details: "CGPA: 8.96"
    }
  ];

  const heroBackground =
    mode === "light"
      ? "linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)"
      : "linear-gradient(135deg, #0d47a1 0%, #1976d2 100%)";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>

        {/* Fixed AppBar with single MenuIcon */}
        <AppBar position="fixed" color="transparent" elevation={0}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton onClick={toggleColorMode} color="inherit">
              {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>

            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Drawer for both desktop & mobile */}
        <Drawer
          anchor="top"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
        >
          {drawer}
        </Drawer>

        {/* Hero pushed down by AppBar */}
        <Box
          id="hero"
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          sx={{
            width: "100vw",
            height: "100vh",
            background: heroBackground,
            pt: "64px",  // push below AppBar
          }}
        >
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              height: "calc(100% - 64px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Avatar sx={{ width: 120, height: 120, mb: 2, border: "4px solid #fff" }}>
              A
            </Avatar>
            <Typography variant="h2" color="#fff" gutterBottom>
              Hi, I'm Angad Pal Singh
            </Typography>
            <Typography variant="h5" color="#fff" gutterBottom>
              Full Stack Engineer & DevOps Enthusiast
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Button
                component="a"
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{ mr: 2, bgcolor: "#fff", color: "#2196f3" }}
              >
                Resume
              </Button>
              <Button variant="contained" href="#contact" sx={{ bgcolor: "#fff", color: "#2196f3" }}>
                Contact
              </Button>
            </Box>
          </Container>
        </Box>

        {/* All sections below hero revert to text.primary */}
        <Divider sx={{ my: 4 }} />

        <Container id="about" sx={{ py: 8, scrollMarginTop: "64px", color: "text.primary" }}>
          <Typography variant="h4" align="center" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" align="center">
            {bioText}
          </Typography>
        </Container>

        <Divider sx={{ my: 4 }} />

        <Container id="skills" sx={{ py: 8, scrollMarginTop: "64px", color: "text.primary" }}>
          <Typography variant="h4" align="center" gutterBottom>SKILLS</Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 2, mt: 4 }}>
            {skills.map((skill, idx) => {
              const borderCol = idx % 2 === 0 ? theme.palette.secondary.main : theme.palette.primary.light;
              return (
                <Box key={skill} sx={{ display: "flex", alignItems: "center", border: `2px solid ${borderCol}`, borderRadius: 2, p: 2 }}>
                  {iconMap[skill]}
                  <Typography sx={{ ml: 1 }}>{skill}</Typography>
                </Box>
              );
            })}
          </Box>
        </Container>

        <Divider sx={{ my: 4 }} />

        <Container id="experience" sx={{ py: 8, scrollMarginTop: "64px", color: "text.primary" }}>
          <Typography variant="h4" align="center" gutterBottom>MY EXPERIENCE</Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            An overview of my professional industry experience.
          </Typography>
          {experienceEntries.map((exp, idx) => {
            const borderColor = idx === 0 ? theme.palette.secondary.main : theme.palette.primary.main;
            return (
              <Box key={exp.role} sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "center" : "flex-start", border: `2px solid ${borderColor}`, borderRadius: 2, p: 3, mb: 6 }}>
                <Box sx={{ flex: isMobile ? "0 0 auto" : "0 0 200px", mr: isMobile ? 0 : 4, mb: isMobile ? 3 : 0, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  <Avatar src={exp.logo} variant="square" sx={{ width: 140, height: 140, objectFit: "contain", mb: 1 }} />
                  <Typography variant="subtitle2">{exp.company}</Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ color: borderColor, fontWeight: "bold", mb: 1 }}>{exp.role}</Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <CalendarTodayIcon sx={{ color: borderColor, mr: 1 }} />
                    <Typography sx={{ mr: 3 }}>{exp.date}</Typography>
                    <WorkOutlineIcon sx={{ color: borderColor, mr: 1 }} />
                    <Typography>{exp.type}</Typography>
                  </Box>
                  <Divider />
                  <Box component="ul" sx={{ pl: 2, mt: 2 }}>
                    {exp.bullets.map((pt) => <Box key={pt} component="li" sx={{ mb: 1 }}>{pt}</Box>)}
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Container>

        <Divider sx={{ my: 4 }} />

        <Container id="education" sx={{ py: 8, scrollMarginTop: "64px", color: "text.primary" }}>
          <Typography variant="h4" align="center" gutterBottom>EDUCATION</Typography>
          {educationEntries.map((edu, idx) => {
            const borderColor = idx === 0 ? theme.palette.secondary.main : theme.palette.primary.main;
            return (
              <Box key={edu.degree} sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "center" : "flex-start", border: `2px solid ${borderColor}`, borderRadius: 2, p: 3, mb: 6 }}>
                <Box sx={{ flex: isMobile ? "0 0 auto" : "0 0 200px", mr: isMobile ? 0 : 4, mb: isMobile ? 3 : 0, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  <Avatar src={edu.logo} variant="square" sx={{ width: 140, height: 140, objectFit: "contain", mb: 1 }} />
                  <Typography variant="subtitle2">{edu.institution}</Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ color: borderColor, fontWeight: "bold", mb: 1 }}>{edu.degree}</Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <CalendarTodayIcon sx={{ color: borderColor, mr: 1 }} />
                    <Typography>{edu.period}</Typography>
                  </Box>
                  <Divider />
                  <Typography sx={{ pl: 2, mt: 2 }}>{edu.details}</Typography>
                </Box>
              </Box>
            );
          })}
        </Container>

        <Divider sx={{ my: 4 }} />

        <Container id="contact" sx={{ py: 8, scrollMarginTop: "64px", textAlign: "center", color: "text.primary" }}>
          <Typography variant="h4" align="center" gutterBottom>CONTACT</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 4, flexWrap: "wrap", mt: 2 }}>
            <Button
              component="a"
              href="https://www.linkedin.com/in/angad-singh-3626241ba/"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<LinkedInIcon />}
              sx={{ bgcolor: theme.palette.primary.main, color: "#fff", px:4, py:2, borderRadius:2, textTransform:"none", fontSize:"1rem", "&:hover":{bgcolor:theme.palette.primary.dark} }}
            >
              LinkedIn
            </Button>
            <Button
              component="a"
              href="https://github.com/Angad039"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<GitHubIcon />}
              sx={{ bgcolor: theme.palette.primary.main, color: "#fff", px:4, py:2, borderRadius:2, textTransform:"none", fontSize:"1rem", "&:hover":{bgcolor:theme.palette.primary.dark} }}
            >
              GitHub
            </Button>
            <Button
              component="a"
              href="mailto:as2526019@gmail.com"
              variant="contained"
              startIcon={<EmailIcon />}
              sx={{ bgcolor: theme.palette.primary.main, color: "#fff", px:4, py:2, borderRadius:2, textTransform:"none", fontSize:"1rem", "&:hover":{bgcolor:theme.palette.primary.dark} }}
            >
              Email
            </Button>
          </Box>
        </Container>

      </Box>
    </ThemeProvider>
  );
}
