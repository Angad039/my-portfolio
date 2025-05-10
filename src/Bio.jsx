import React, { useState } from 'react'
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
  IconButton
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { motion } from 'framer-motion'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import CodeIcon from '@mui/icons-material/Code'
import resumeUrl from './assets/AngadSinghResume.pdf'

export default function LandingPage() {
  const [mode, setMode] = useState('light')
  const theme = createTheme({ palette: { mode } })
  const toggleColorMode = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'))
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const sections = [
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ]

  const skills = [
    'React.js', 'JavaScript', 'TypeScript',
    'Material UI', 'Node.js', 'Express.js', 'Sequelize',
    'Terraform', 'Ansible', 'GitHub Actions',
    'Docker', 'AWS', 'Azure', 'Splunk', 'Dynatrace'
  ]

  const experienceEntries = [
    {
      role: 'Associate',
      company: 'State Street Corporation',
      date: 'Jan 2022 – Mar 2024',
      type: 'Full-time',
      bullets: [
        'Compliance Automation: Built automated checks for server/VM and Docker image compliance, enabling real-time identification of misconfigurations and enforcing security policies.',
        'Cloud & Infrastructure Monitoring: Delivered Terraform insights with real-time visualizations, enabling better observability of project deployments and resource trends across environments.',
        'Log Management: Optimized log forwarding using Splunk to improve monitoring and troubleshooting capabilities. Dynatrace integration for Terraform Enterprise monitoring.'
      ]
    },
    {
      role: 'Senior Associate',
      company: 'State Street Corporation',
      date: 'Mar 2024 – Present',
      type: 'Full-time',
      bullets: [
        'CI/CD Pipelines: Utilized Jenkins, GitHub Actions, built and deployed Visualization portal, integrating DevSecOps principles.',
        'Security: Conducted vulnerability scans using Trivy, Black Duck, and AquaSec Cloud, and performed static code analysis with Veracode to enhance security.',
        'Image Bakery: Developed Linux OS VM and container images compliant with CIS and NIST standards, used enterprise-wide for secure deployments.',
        'API Integration & Optimization: Designed scalable APIs for configuration compliance and optimized multi-cloud integration.'
      ]
    }
  ]

  const educationEntries = [
    {
      degree: 'B.Tech. in Computer Science',
      institution: 'Kalinga Institute of Industrial Technology, Bhubaneswar',
      period: '2018 – 2022',
      details: 'CGPA: 8.96'
    }
  ]

  const heroBackground = mode === 'light'
    ? 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)'
    : 'linear-gradient(135deg, #0d47a1 0%, #1976d2 100%)'

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>

        {/* Hero + Nav */}
        <Box id="hero" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} sx={{ width: '100vw', height: '100vh', background: heroBackground, position: 'relative', overflow: 'hidden' }}>
          <AppBar position="absolute" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(10px)' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <IconButton onClick={toggleColorMode} color="inherit">
                {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
              {!isMobile && (
                <Box>
                  {sections.map(sec => (
                    <Button key={sec.id} component={Link} href={`#${sec.id}`} sx={{ color: '#fff' }}>{sec.label}</Button>
                  ))}
                </Box>
              )}
            </Toolbar>
          </AppBar>
          <Container maxWidth={false} disableGutters sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', px: 4 }}>
            <Avatar src="/avatar.jpg" alt="Angad" sx={{ width: 120, height: 120, mb: 2, border: '4px solid #fff' }} />
            <Typography variant="h2" gutterBottom>Hi, I&#39;m Angad</Typography>
            <Typography variant="h5" gutterBottom>Full Stack Engineer & DevOps Enthusiast</Typography>
            <Box sx={{ mt: 4 }}>
              <Button component="a" href={resumeUrl} target="_blank" rel="noopener noreferrer" variant="contained" sx={{ mr: 2, bgcolor: '#fff', color: '#2196f3' }}>Resume</Button>
              <Button variant="contained" href="#contact" sx={{ mr: 2, bgcolor: '#fff', color: '#2196f3' }}>Get in Touch</Button>
            </Box>
          </Container>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Skills Section */}
        <Container id="skills" sx={{ py: 8 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>SKILLS</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mt: 4 }}>
            {skills.map((skill, idx) => {
              const color = idx % 2 === 0 ? theme.palette.secondary.main : theme.palette.primary.light
              return (
                <Box key={skill} sx={{
                  display: 'flex', alignItems: 'center', border: `2px solid ${color}`, borderRadius: 2, p: 1, 
                }}>
                  <CodeIcon sx={{ mr: 1, color }} />
                  <Typography>{skill}</Typography>
                </Box>
              )
            })}
          </Box>
        </Container>

        <Divider sx={{ my: 4 }} />

        {/* Experience Section */}
        <Container id="experience" sx={{ py: 8 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>MY EXPERIENCE</Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>An overview of my professional industry experience.</Typography>
          {experienceEntries.map((exp, idx) => {
            const color = idx % 2 === 0 ? theme.palette.secondary.main : theme.palette.primary.light
            return (
              <Box key={exp.role} sx={{ border: `2px solid ${color}`, borderRadius: 2, p: 3, mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ color, fontWeight: 'bold', flexGrow: 1 }}>{exp.role}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}><CalendarTodayIcon sx={{ mr: 1, color }} /><Typography>{exp.date}</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}><WorkOutlineIcon sx={{ mr: 1, color }} /><Typography>{exp.type}</Typography></Box>
                </Box>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {exp.bullets.map(b => <Box component="li" key={b} sx={{ mb: 1 }}>{b}</Box>)}
                </Box>
              </Box>
            )
          })}
        </Container>

        <Divider sx={{ my: 4 }} />

        {/* Education Section */}
        <Container id="education" sx={{ py: 8 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>EDUCATION</Typography>
          {educationEntries.map((edu, idx) => {
            const color = idx % 2 === 0 ? theme.palette.secondary.main : theme.palette.primary.light
            return (
              <Box key={edu.degree} sx={{ border: `2px solid ${color}`, borderRadius: 2, p: 3, mb: 4 }}>
                <Typography variant="h6" sx={{ color, fontWeight: 'bold' }}>{edu.degree}</Typography>
                <Typography sx={{ mb: 1 }}>{edu.institution}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}><CalendarTodayIcon sx={{ mr: 1, color }} /><Typography>{edu.period}</Typography></Box>
                <Typography>{edu.details}</Typography>
              </Box>
            )
          })}
        </Container>

        <Divider sx={{ my: 4 }} />

        {/* Contact Section */}
        <Container id="contact" sx={{ py: 8 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>CONTACT</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 2 }}>
            <Link href="mailto:as2526019@gmail.com" sx={{ display: 'flex', alignItems: 'center', color: 'inherit' }}><EmailIcon sx={{ mr: 1 }} /> as2526019@gmail.com</Link>
            <Link href="tel:+916264844611" sx={{ display: 'flex', alignItems: 'center', color: 'inherit' }}><PhoneIcon sx={{ mr: 1 }} /> +91-6264844611</Link>
            <Link href="https://www.linkedin.com/in/angad-singh-3626241ba/" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center', color: 'inherit' }}><LinkedInIcon sx={{ mr: 1 }} /> LinkedIn</Link>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
