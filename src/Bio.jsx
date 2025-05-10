import React, { useState } from 'react'
import {
  Box,
  Avatar,
  Typography,
  Link,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  CssBaseline,
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export default function Bio() {
  const [mode, setMode] = useState('light')
  const theme = createTheme({ palette: { mode } })
  const toggleColorMode = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'))

  const sections = [
    {
      title: 'Full Stack Development',
      items: [
        'Compliance Automation: Built automated checks for server/VM and Docker image compliance, enabling real-time identification of misconfigurations and enforcing security policies.',
        'Cloud & Infrastructure Monitoring: Delivered Terraform insights with real-time visualizations, enabling better observability of project deployments and resource trends across environments.',
        'Image Monitoring Automation: Created Image Bakery to fetch and display container images from JFrog, Azure ACR, and AWS ECR with real-time deployment trend tracking.',
        'Security & Access Control: Implemented RBAC and automated health tracking for Ansible and Terraform services, improving security and reducing manual intervention.',
        'API Integration & Optimization: Designed scalable APIs for configuration compliance and optimized multi-cloud integration, improving responsiveness and data reliability.',
        'CI/CD & Deployment Streamlining: Leveraged GitHub Actions and Ansible Tower to automate deployments and accelerate release cycles through robust CI/CD pipelines.',
        'Containerization: Implemented Docker-based deployments, improving scalability, reliability, and ensuring consistent performance.',
      ],
    },
    { title: 'Monitoring', items: ['Set up Dynatrace for Terraform Enterprise monitoring and integrated it with Splunk for centralized log analysis.'] },
    { title: 'Log Management', items: ['Optimized log forwarding using Splunk to improve monitoring and troubleshooting capabilities.'] },
    { title: 'CI/CD Pipelines', items: ['Utilized Jenkins, GitHub Actions to build and deploy the Visualization portal, integrating DevSecOps principles.'] },
    { title: 'Security', items: ['Conducted vulnerability scans using Trivy, Black Duck, and AquaSec Cloud, and performed static code analysis with Veracode to enhance security.'] },
    { title: 'Image Bakery', items: ['Developed Linux OS VM and container images compliant with CIS and NIST standards, used enterprise-wide for secure deployments.'] },
  ]

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative', width: '100vw', minHeight: '100vh', p: 4 }}>
        {/* Theme Toggle */}
        <IconButton
          onClick={toggleColorMode}
          color="inherit"
          sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1000 }}
        >
          {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>

        {/* Content spans full width */}
        {/* Header */}
        <Box sx={{ textAlign: 'center', width: '100%' }}>
          <Avatar sx={{ width: 96, height: 96, mx: 'auto' }}>AP</Avatar>
          <Typography variant="h4" component="h1" my={2}>
            Angad Pal Singh
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" mb={2}>
            Full Stack Engineer
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Link href="tel:+916264844611" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
              <PhoneIcon fontSize="small" sx={{ mr: .5 }} /> +91-6264844611
            </Link>
            <Link href="mailto:as2526019@gmail.com" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon fontSize="small" sx={{ mr: .5 }} /> as2526019@gmail.com
            </Link>
            <Link href="#" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon fontSize="small" sx={{ mr: .5 }} /> Bangalore, India
            </Link>
            <Link href="https://www.linkedin.com/in/angad-singh-3626241ba/" target="_blank" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
              <LinkedInIcon fontSize="small" sx={{ mr: .5 }} /> LinkedIn
            </Link>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Summary */}
        <Typography variant="body1" paragraph sx={{ mx: '10%', textAlign: 'center' }}>
          Results-driven Full Stack Engineer with 3+ years of experience building scalable, secure web applications using React.js, Node.js, Express.js, and Sequelize. Expertise in DevOps automation, CI/CD pipelines (GitHub Actions, Ansible), containerization (Docker), and real-time infrastructure monitoring.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Skills */}
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
          Technical Skills
        </Typography>
        <List dense sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 4, mx: '10%' }}>
          {[
            'React.js · JavaScript · TypeScript',
            'Material UI (MUI)',
            'Node.js · Express.js · Sequelize',
            'Terraform · Ansible · GitHub Actions',
            'AWS · Azure · Docker',
            'REST APIs · JFrog · GitHub APIs',
          ].map(skill => (
            <ListItem key={skill} sx={{ width: 'auto', pl: 0 }}>
              <ListItemText primary={skill} />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 4 }} />

        {/* Professional Experience */}
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
          Professional Experience
        </Typography>
        <Card variant="outlined" sx={{ mx: '10%', mb: 4 }}>
          <CardContent>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ textAlign: 'center', mb: 1 }}>
              Sr. Associate, State Street Corporation
            </Typography>
            <Typography variant="caption" color="text.secondary" display="block" sx={{ textAlign: 'center', mb: 3 }}>
              Jan 2022 – Present
            </Typography>

            {sections.map(({ title, items }) => (
              <Box key={title} sx={{ my: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  {title}
                </Typography>
                <List dense>
                  {items.map(item => (
                    <ListItem key={item} sx={{ pl: 0 }}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </CardContent>
        </Card>

        <Divider sx={{ my: 4 }} />

        {/* Education */}
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
          Education
        </Typography>
        <Card variant="outlined" sx={{ mx: '10%', mb: 4 }}>
          <CardContent>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ textAlign: 'center', mb: 1 }}>
              B.Tech. in Computer Science
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              Kalinga Institute of Industrial Technology, Bhubaneswar (CGPA: 8.96) — 2018–2022
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  )
}
