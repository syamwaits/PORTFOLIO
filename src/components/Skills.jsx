import React from 'react';
import { Container, Typography, Box, Grid, Paper, Chip, Avatar, LinearProgress } from '@mui/material';
import { Computer, Storage, Security, Settings, BusinessCenter } from '@mui/icons-material';

const skillCategories = [
 
  {
    title: 'Tools & Software',
    icon: <Settings sx={{ fontSize: 32, color: '#059669' }} />,
    skills: ['SQL', 'ERP (Beams, Canias)', 'Office 365', 'Remote Desktop Tools', 'PowerShell'],
    color: '#059669',
    gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)'
  },
  {
    title: 'Hardware',
    icon: <Storage sx={{ fontSize: 32, color: '#dc2626' }} />,
    skills: ['Servers', 'Desktops', 'Printers', 'IP Cameras', 'Network Equipment'],
    color: '#dc2626',
    gradient: 'linear-gradient(135deg, #dc2626 0%, #f87171 100%)'
  },
  {
    title: 'Networking',
    icon: <Security sx={{ fontSize: 32, color: '#7c3aed' }} />,
    skills: ['LAN/WAN', 'VPN', 'Firewalls', 'Routers', 'Switch'],
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)'
  },
  {
    title: 'Management Skills',
    icon: <BusinessCenter sx={{ fontSize: 32, color: '#ea580c' }} />,
    skills: ['Project Management', 'Team Leadership', 'IT Solutions', 'Business Analysis', 'Technical Support'],
    color: '#ea580c',
    gradient: 'linear-gradient(135deg, #ea580c 0%, #fb923c 100%)'
  }
];

const skillLevels = {
  'Windows Server': 95,
  'Windows 10': 98,
  'Linux': 85,
  'VMware': 88,
  'Active Directory': 92,
  'SQL': 90,
  'ERP (Beams, Canias)': 95,
  'Office 365': 92,
  'Remote Desktop Tools': 88,
  'PowerShell': 85,
  'Servers': 94,
  'Desktops': 96,
  'Printers': 85,
  'IP Cameras': 90,
  'Network Equipment': 87,
  'LAN/WAN': 93,
  'VPN': 91,
  'Firewalls': 89,
  'Routers': 87,
  'Switch': 88,
  'Project Management': 85,
  'Team Leadership': 88,
  'IT Solutions': 92,
  'Business Analysis': 80,
  'Technical Support': 95
};

export default function Skills() {
  return (
    <Box 
      sx={{ 
        bgcolor: 'background.paper', 
        py: 10,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box textAlign="center" mb={8}>
          <Typography 
            variant="h2" 
            sx={{
              fontWeight: 800,
              mb: 3,
              background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textAlign: 'center'
            }}
          >
            Skills & Expertise
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ maxWidth: 600, mx: 'auto', fontSize: '1.2rem', lineHeight: 1.6, textAlign: 'center' }}
          >
            Comprehensive technical skills gained through 10+ years of hands-on experience in enterprise IT environments
          </Typography>
        </Box>

        {/* Skills Grid */}
        <Grid container spacing={4} sx={{ alignItems: 'stretch', justifyContent: 'center' }}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid item xs={12} sm={6} lg={4} xl={2.4} key={categoryIndex}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: { xs: 3, md: 4 },
                  bgcolor: 'background.paper',
                  border: '2px solid rgba(100, 116, 139, 0.3)',
                  borderRadius: 4,
                  height: { xs: 'auto', md: '450px' },
                  minHeight: '450px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    borderColor: category.color,
                    '& .skill-header': {
                      background: category.gradient
                    },
                    '& .skill-icon': {
                      transform: 'scale(1.1) rotate(5deg)'
                    }
                  }
                }}
              >
                {/* Category Header */}
                <Box 
                  className="skill-header"
                  sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: { xs: 2.5, md: 3 },
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 3,
                    background: theme.palette.mode === 'dark' ? 'grey.700' : '#f8fafc',
                    transition: 'all 0.4s ease',
                    minHeight: '80px'
                  })}
                >
                  <Avatar
                    className="skill-icon"
                    sx={{
                      bgcolor: 'transparent',
                      mr: 2,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {category.icon}
                  </Avatar>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 700,
                      color: 'text.primary'
                    }}
                  >
                    {category.title}
                  </Typography>
                </Box>

                {/* Skills List with Progress Bars */}
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  {category.skills.map((skill, skillIndex) => (
                    <Box key={skillIndex} sx={{ mb: { xs: 2, md: 2.5 } }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            fontWeight: 600,
                            color: 'text.primary',
                            fontSize: { xs: '0.9rem', md: '1rem' }
                          }}
                        >
                          {skill}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontWeight: 600,
                            color: category.color,
                            fontSize: { xs: '0.8rem', md: '0.875rem' }
                          }}
                        >
                          {skillLevels[skill]}%
                        </Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={skillLevels[skill]} 
                        sx={(theme) => ({
                          height: { xs: 6, md: 8 },
                          borderRadius: 4,
                          bgcolor: theme.palette.mode === 'dark' ? 'grey.600' : '#f1f5f9',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 4,
                            background: category.gradient
                          }
                        })}
                      />
                    </Box>
                  ))}
                </Box>

                {/* Skill Count Badge */}
                <Box 
                  sx={{
                    position: 'absolute',
                    top: { xs: 12, md: 16 },
                    right: { xs: 12, md: 16 },
                    bgcolor: category.color,
                    color: '#fff',
                    borderRadius: '50%',
                    width: { xs: 28, md: 32 },
                    height: { xs: 28, md: 32 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: { xs: '0.75rem', md: '0.875rem' },
                    fontWeight: 700
                  }}
                >
                  {category.skills.length}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Skills Summary */}
        <Box 
          sx={{ 
            mt: 8, 
            p: 6, 
            bgcolor: 'grey.800', 
            borderRadius: 4,
            border: '2px solid rgba(100, 116, 139, 0.3)',
            textAlign: 'center'
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'text.primary' }}>
            Technical Proficiency Summary
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 800, color: '#2563eb', mb: 1 }}>
                  20+
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                  Core Technologies
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 800, color: '#059669', mb: 1 }}>
                  10+
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                  Years Experience
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 800, color: '#dc2626', mb: 1 }}>
                  90%
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                  Average Proficiency
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 800, color: '#7c3aed', mb: 1 }}>
                  21
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                  Technical Skills
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}