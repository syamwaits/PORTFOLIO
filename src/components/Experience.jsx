import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { Work, Star, TrendingUp } from '@mui/icons-material';

const experiences = [
  {
    title: 'IT Consultant',
    company: 'Elite Group of Companies - UAE',
    period: '2016 – Present',
    location: 'UAE',
    description: 'Providing comprehensive IT support and infrastructure management for a dynamic organization. Leading technical initiatives and ensuring seamless business operations through robust IT solutions.',
    icon: <Work />,
    achievements: [
      'Provide end-to-end IT support for users across departments',
      'Manage networking, system maintenance, and security configurations', 
      'Support ERP solutions (Beams, Canias), including troubleshooting and updates',
      'Conduct daily system backups and ensure business continuity',
      'Coordinate IT projects, manage resources, and implement technology upgrades'
    ]
  },
  {
    title: 'Service Engineer',
    company: 'Ensure Service Support - India',
    period: '2015 – 2016',
    location: 'India',
    description: 'Specialized technical support role focused on printer maintenance and repair services. Provided expert diagnosis and resolution of hardware issues for HP printer products.',
    icon: <Star />,
    achievements: [
      'Specialized in servicing HP DeskJet and LaserJet printers',
      'Diagnosed hardware issues and performed repairs or replacements'
    ]
  },
  {
    title: 'Desktop Support Engineer',
    company: 'Enixel Creative Studio - India',
    period: '2014 – 2015',
    location: 'India',
    description: 'Provided technical support for creative teams, ensuring optimal workstation performance and resolving hardware and software issues to maintain productivity.',
    icon: <TrendingUp />,
    achievements: [
      'Provided technical support for hardware and software issues',
      'Ensured smooth workstation performance for creative teams'
    ]
  },
  {
    title: 'Field Engineer',
    company: 'Centre Tec - India',
    period: '2013 – 2014',
    location: 'India',
    description: 'On-site technical support specialist focusing on security systems installation and maintenance. Provided comprehensive client training and support services.',
    icon: <Work />,
    achievements: [
      'Installed and configured CCTV surveillance systems and IP cameras',
      'Provided on-site technical support and client training'
    ]
  }
];

const coreCompetencies = [
  'ERP Implementation & Support (Beams, Canias)',
  'Networking & System Administration', 
  'Hardware & Software Troubleshooting',
  'SQL & Database Support',
  'IP Camera & CCTV Installation',
  'Office 365 & Email Configuration',
  'Firewall & PABX Configuration',
  'VPN & Remote Access Setup',
  'Server Monitoring & Performance Tuning',
  'IT Project Management & Coordination'
];

export default function Experience() {
  return (
    <Box 
      id="experience" 
      sx={{ 
        py: 8,
        bgcolor: 'background.default',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="lg">
      <Box textAlign="center" mb={6}>
        <Typography 
          variant="h2" 
          fontWeight={800} 
          textAlign="center"
          sx={{ 
            mb: 2,
            background: 'linear-gradient(45deg, #fff, #e0e0e0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          My Journey
        </Typography>
        <Typography 
          variant="h6" 
          color={(theme) => theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.8)" : "text.secondary"} 
          maxWidth={600} 
          mx="auto"
        >
          A timeline of growth, achievements, and professional evolution
        </Typography>
      </Box>
      
      <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', lg: 'row' } }}>
        <Box sx={{ flex: 2 }}>
          {experiences.map((exp, index) => (
            <Box key={index} sx={{ display: 'flex', mb: 6, alignItems: 'flex-start' }}>
              <Box sx={{ mr: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box
                  sx={{ 
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    border: '3px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '& svg': { color: '#fff', fontSize: 28 }
                  }}
                >
                  {exp.icon}
                </Box>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Paper 
                  sx={(theme) => ({
                    p: 4,
                    background: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(0, 0, 0, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: theme.palette.mode === 'dark'
                      ? '1px solid rgba(255, 255, 255, 0.2)'
                      : '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: 4,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px) scale(1.02)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 25px 50px rgba(0, 0, 0, 0.3)'
                        : '0 25px 50px rgba(0, 0, 0, 0.15)'
                    }
                  })}
                >
                  <Typography 
                    variant="h4" 
                    fontWeight={700} 
                    color={(theme) => theme.palette.mode === 'dark' ? "#fff" : "text.primary"} 
                    gutterBottom
                  >
                    {exp.title}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    color={(theme) => theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.9)" : "text.secondary"} 
                    gutterBottom
                  >
                    {exp.company}
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    color={(theme) => theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.7)" : "text.secondary"} 
                    sx={{ mb: 2 }}
                  >
                    {exp.period} | {exp.location}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color={(theme) => theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.8)" : "text.secondary"} 
                    sx={{ mb: 3, lineHeight: 1.6 }}
                  >
                    {exp.description}
                  </Typography>
                  <Box>
                    <Typography 
                      variant="h6" 
                      color={(theme) => theme.palette.mode === 'dark' ? "#fff" : "text.primary"} 
                      sx={{ mb: 2 }}
                    >
                      Key Responsibilities & Achievements:
                    </Typography>
                    {exp.achievements.map((achievement, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1.5 }}>
                        <Box 
                          sx={{ 
                            width: 8, 
                            height: 8, 
                            borderRadius: '50%', 
                            background: 'linear-gradient(45deg, #667eea, #764ba2)', 
                            mr: 2,
                            mt: 0.5,
                            flexShrink: 0
                          }} 
                        />
                        <Typography 
                          variant="body2" 
                          color={(theme) => theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.8)" : "text.secondary"} 
                          sx={{ lineHeight: 1.5 }}
                        >
                          {achievement}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Box>
            </Box>
          ))}
        </Box>
        
        <Box sx={{ flex: 1, minWidth: 300 }}>
          <Paper 
            sx={(theme) => ({
              p: 4,
              background: theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, 0.1)'
                : 'rgba(0, 0, 0, 0.05)',
              backdropFilter: 'blur(20px)',
              border: theme.palette.mode === 'dark'
                ? '1px solid rgba(255, 255, 255, 0.2)'
                : '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: 4,
              position: 'sticky',
              top: 100,
              height: 'fit-content'
            })}
          >
            <Typography 
              variant="h5" 
              fontWeight={700} 
              color={(theme) => theme.palette.mode === 'dark' ? "#fff" : "text.primary"} 
              sx={{ mb: 3 }}
            >
              Core Competencies
            </Typography>
            <Box>
              {coreCompetencies.map((competency, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Box 
                    sx={{ 
                      width: 6, 
                      height: 6, 
                      borderRadius: '50%', 
                      background: 'linear-gradient(45deg, #667eea, #764ba2)', 
                      mt: 1, 
                      mr: 2,
                      flexShrink: 0
                    }} 
                  />
                  <Typography 
                    variant="body2" 
                    color={(theme) => theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.8)" : "text.secondary"} 
                    sx={{ lineHeight: 1.5 }}
                  >
                    {competency}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Box>
      </Box>
      </Container>
    </Box>
  );
}