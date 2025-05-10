import React from 'react'
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
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemText
} from '@mui/material'
import { motion } from 'framer-motion'
import resumeUrl from './assets/AngadSinghResume.pdf'

export default function LandingPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' }
  ]

  const bioText = `Results-driven Full Stack Engineer with 3+ years of experience building scalable, secure web applications using React.js, Node.js, Express.js, and Sequelize. Expertise in DevOps automation, CI/CD pipelines (GitHub Actions, Ansible), containerization (Docker), and real-time infrastructure monitoring.`

  const skills = [
    'React.js', 'JavaScript', 'TypeScript',
    'Material UI', 'Node.js', 'Express.js', 'Sequelize',
    'Terraform', 'Ansible', 'GitHub Actions', 'Docker',
    'AWS', 'Azure', 'Splunk', 'Dynatrace'
  ]

  const experienceSections = [
    {
      title: 'Full Stack Development',
      items: [
        'Compliance Automation: Built automated checks for server/VM and Docker image compliance, enforcing security policies.',
        'Cloud & Infrastructure Monitoring: Delivered Terraform insights with real-time visualizations across environments.',
        'Image Bakery: Fetched container images from JFrog, Azure ACR, AWS ECR with trend tracking.',
        'RBAC & Health Tracking: Automated health checks for Ansible and Terraform services.'
      ]
    },
    {
      title: 'Monitoring & Logs',
      items: [
        'Dynatrace integration for Terraform Enterprise monitoring.',
        'Centralized log analysis using Splunk.'
      ]
    },
    {
      title: 'CI/CD & DevSecOps',
      items: [
        'Built pipelines using Jenkins & GitHub Actions.',
        'Implemented DevSecOps with Trivy, Black Duck, AquaSec Cloud, and Veracode scans.'
      ]
    }
  ]

  return (
    <>
      <CssBaseline />
      {/* Hero + Nav Container */}
      <Box
        id="hero"
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
          background: 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)',
          overflow: 'hidden'
        }}
      >
        {/* Nav inside Hero */}
        <AppBar
          position="absolute"
          color="transparent"
          elevation={0}
          sx={{ top: 0, left: 0, right: 0, backdropFilter: 'blur(10px)' }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
              Angad Singh
            </Typography>
            {!isMobile && (
              <Box>
                {sections.map(sec => (
                  <Button
                    key={sec.id}
                    component={Link}
                    href={`#${sec.id}`}
                    sx={{ color: '#fff' }}
                  >
                    {sec.label}
                  </Button>
                ))}
                <Button
                  variant="outlined"
                  component={Link}
                  href="#contact"
                  sx={{ ml: 2, borderColor: '#fff', color: '#fff' }}
                >
                  Contact
                </Button>
              </Box>
            )}
          </Toolbar>
        </AppBar>

        {/* Hero Content */}
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            textAlign: 'center',
            px: 4
          }}
        >
          <Avatar
            src="/avatar.jpg"
            alt="Angad Singh"
            sx={{ width: 120, height: 120, mb: 2, border: '4px solid #fff' }}
          />
          <Typography variant="h2" gutterBottom>
            Hi, I&#39;m Angad
          </Typography>
          <Typography variant="h5" gutterBottom>
            Full Stack Engineer & DevOps Enthusiast
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mr: 2, bgcolor: '#fff', color: '#2196f3' }}
            >
              Download Resume
            </Button>
            <Button
              variant="outlined"
              href="#contact"
              sx={{ borderColor: '#fff', color: '#fff' }}
            >
              Get in Touch
            </Button>
          </Box>
        </Container>
      </Box>

      {/* About */}
      <Container id="about" sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
          About Me
        </Typography>
        <Typography variant="body1" align="center" sx={{ maxWidth: 600, mx: 'auto' }}>
          {bioText}
        </Typography>
      </Container>

      {/* Skills */}
      <Container id="skills" sx={{ py: 8, backgroundColor: theme.palette.action.hover }}>
        <Typography variant="h4" gutterBottom align="center">
          Skills
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mt: 4 }}>
          {skills.map(skill => (
            <Box key={skill} sx={{ px: 2, py: 1, border: '1px solid', borderColor: 'text.primary', borderRadius: 2 }}>
              <Typography>{skill}</Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Experience */}
      <Container id="experience" sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
          Professional Experience
        </Typography>
        {experienceSections.map(section => (
          <Box key={section.title} sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              {section.title}
            </Typography>
            <List>
              {section.items.map(item => (
                <ListItem key={item} sx={{ pl: 0 }}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Container>

      {/* Education */}
      <Container id="education" sx={{ py: 8, backgroundColor: theme.palette.action.hover }}>
        <Typography variant="h4" gutterBottom align="center">
          Education
        </Typography>
        <Box sx={{ maxWidth: 600, mx: 'auto' }}>
          <Typography variant="h6">B.Tech. in Computer Science</Typography>
          <Typography>
            Kalinga Institute of Industrial Technology, Bhubaneswar (CGPA: 8.96) — 2018–2022
          </Typography>
        </Box>
      </Container>

      {/* Contact */}
      <Container id="contact" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Get in Touch
        </Typography>
        <Button variant="contained" href="mailto:as2526019@gmail.com">
          Email Me
        </Button>
      </Container>
    </>
  )
}
