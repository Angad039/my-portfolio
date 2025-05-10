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
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import stateStreetLogo from "./assets/stateStreet.png";
import kiitLogo from "./assets/kiit.png";
import resumeUrl from "./assets/AngadSinghResume.pdf";

export default function LandingPage() {
  const [mode, setMode] = useState("light");
  const theme = createTheme({ palette: { mode } });
  const toggleColorMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const sections = ["skills", "experience", "education", "contact"];

  const skills = [
    "React.js",
    "JavaScript",
    "TypeScript",
    "Material UI",
    "Node.js",
    "Express.js",
    "Sequelize",
    "Terraform",
    "Ansible",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Splunk",
    "Dynatrace",
    "Kibana",
    "Grafana",
  ];

  const experienceEntries = [
    {
      role: "Associate",
      company: "State Street Corporation",
      date: "Jan 2022 – Mar 2024",
      type: "Full-time",
      logo: stateStreetLogo,
      bullets: [
        "Compliance Automation: Built automated checks for server/VM and Docker image compliance, enabling real-time identification of misconfigurations and enforcing security policies.",
        "Cloud & Infrastructure Monitoring: Delivered Terraform insights with real-time visualizations, enabling better observability of project deployments and resource trends across environments.",
        "Log Management: Optimized log forwarding using Splunk to improve monitoring and troubleshooting capabilities. Dynatrace integration for Terraform Enterprise monitoring.",
      ],
    },
    {
      role: "Senior Associate",
      company: "State Street Corporation",
      date: "Mar 2024 – Present",
      type: "Full-time",
      logo: stateStreetLogo,
      bullets: [
        "CI/CD Pipelines: Utilized Jenkins, GitHub Actions, built and deployed Visualization portal, integrating DevSecOps principles.",
        "Security: Conducted vulnerability scans using Trivy, Black Duck, and AquaSec Cloud, and performed static code analysis with Veracode to enhance security.",
        "Image Bakery: Developed Linux OS VM and container images compliant with CIS and NIST standards, used enterprise-wide for secure deployments.",
        "API Integration & Optimization: Designed scalable APIs for configuration compliance and optimized multi-cloud integration.",
      ],
    },
  ];

  const educationEntries = [
    {
      degree: "B.Tech. in Computer Science",
      institution: "Kalinga Institute of Industrial Technology, Bhubaneswar",
      period: "2018 – 2022",
      logo: kiitLogo,
      details: "CGPA: 8.96",
    },
  ];

  const heroBackground =
    mode === "light"
      ? "linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)"
      : "linear-gradient(135deg, #0d47a1 0%, #1976d2 100%)";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        {/* Hero + Nav */}
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
            position: "relative",
          }}
        >
          <AppBar
            position="absolute"
            color="transparent"
            elevation={0}
            sx={{ backdropFilter: "blur(10px)" }}
          >
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <IconButton onClick={toggleColorMode} color="inherit">
                {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
              {!isMobile && (
                <Box>
                  {sections.map((id) => (
                    <Button
                      key={id}
                      component={Link}
                      href={`#${id}`}
                      sx={{ color: "#fff" }}
                    >
                      {id.toUpperCase()}
                    </Button>
                  ))}
                </Box>
              )}
            </Toolbar>
          </AppBar>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Avatar
              src="/avatar.jpg"
              sx={{ width: 120, height: 120, mb: 2, border: "4px solid #fff" }}
            />
            <Typography variant="h2" color="#fff" gutterBottom>
              Hi, I&apos;m Angad Pal Singh
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
              <Button
                variant="contained"
                href="#contact"
                sx={{ mr: 2, bgcolor: "#fff", color: "#2196f3" }}
              >
                Contact
              </Button>
            </Box>
          </Container>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Skills Section */}
        <Container id="skills" sx={{ py: 8 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            SKILLS
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 2,
              mt: 4,
            }}
          >
            {skills.map((skill, idx) => {
              const color =
                idx % 2 === 0
                  ? theme.palette.secondary.main
                  : theme.palette.primary.light;
              return (
                <Box
                  key={skill}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    border: `2px solid ${color}`,
                    borderRadius: 2,
                    p: 2,
                  }}
                >
                  <CodeIcon sx={{ mr: 1, color }} />
                  <Typography>{skill}</Typography>
                </Box>
              );
            })}
          </Box>
        </Container>

        <Divider sx={{ my: 4 }} />

        {/* Experience Section */}
        <Container id="experience" sx={{ py: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            MY EXPERIENCE
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            An overview of my professional industry experience.
          </Typography>

          {experienceEntries.map((exp, idx) => {
            const borderColor =
              idx === 0
                ? theme.palette.secondary.main
                : theme.palette.primary.main;
            return (
              <Box
                key={exp.role}
                sx={{
                  display: "flex",
                  border: `2px solid ${borderColor}`,
                  borderRadius: 2,
                  p: 3,
                  mb: 6,
                }}
              >
                {/* Logo Column */}
                <Box
                  sx={{
                    flex: "0 0 200px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 4,
                    textAlign: "center",
                  }}
                >
                  <Avatar
                    src={exp.logo}
                    variant="square"
                    sx={{ width: 140, height: 140, objectFit: "contain" }}
                  />
                  <Typography variant="subtitle2" sx={{ mt: 1 }}>
                    {exp.company}
                  </Typography>
                </Box>
                {/* Text Column */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{ color: borderColor, fontWeight: "bold", mb: 1 }}
                  >
                    {exp.role}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <CalendarTodayIcon sx={{ color: borderColor, mr: 1 }} />
                    <Typography sx={{ mr: 3 }}>{exp.date}</Typography>
                    <WorkOutlineIcon sx={{ color: borderColor, mr: 1 }} />
                    <Typography>{exp.type}</Typography>
                  </Box>
                  <Divider />
                  <Box component="ul" sx={{ pl: 2, mt: 2 }}>
                    {exp.bullets.map((point) => (
                      <Box key={point} component="li" sx={{ mb: 1 }}>
                        {point}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Container>

        <Divider sx={{ my: 4 }} />

        {/* Education Section */}
        <Container id="education" sx={{ py: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            EDUCATION
          </Typography>

          {educationEntries.map((edu, idx) => {
            const borderColor =
              idx === 0
                ? theme.palette.secondary.main
                : theme.palette.primary.main;
            return (
              <Box
                key={edu.degree}
                sx={{
                  display: "flex",
                  border: `2px solid ${borderColor}`,
                  borderRadius: 2,
                  p: 3,
                  mb: 6,
                }}
              >
                {/* Logo Column */}
                <Box
                  sx={{
                    flex: "0 0 200px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 4,
                    textAlign: "center",
                  }}
                >
                  <Avatar
                    src={edu.logo}
                    variant="square"
                    sx={{ width: 140, height: 140, objectFit: "contain" }}
                  />
                  <Typography variant="subtitle2" sx={{ mt: 1 }}>
                    {edu.institution}
                  </Typography>
                </Box>
                {/* Text Column */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{ color: borderColor, fontWeight: "bold", mb: 1 }}
                  >
                    {edu.degree}
                  </Typography>
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

        {/* Contact Section */}
        {/* Contact Section */}
        <Container id="contact" sx={{ py: 8, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            CONTACT
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 4,
              flexWrap: "wrap",
              mt: 2,
            }}
          >
            <Button
              component="a"
              href="https://www.linkedin.com/in/angad-singh-3626241ba/"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<LinkedInIcon />}
              sx={{
                bgcolor: theme.palette.primary.main,
                color: "#fff",
                px: 4,
                py: 2,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": { bgcolor: theme.palette.primary.dark },
              }}
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
              sx={{
                bgcolor: theme.palette.primary.main,
                color: "#fff",
                px: 4,
                py: 2,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": { bgcolor: theme.palette.primary.dark },
              }}
            >
              GitHub
            </Button>
            <Button
              component="a"
              href="mailto:as2526019@gmail.com"
              variant="contained"
              startIcon={<EmailIcon />}
              sx={{
                bgcolor: theme.palette.primary.main,
                color: "#fff",
                px: 4,
                py: 2,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": { bgcolor: theme.palette.primary.dark },
              }}
            >
              Email
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
