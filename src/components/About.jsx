import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Paper, Avatar } from '@mui/material';
import { Email, Phone, LocationOn, LinkedIn, Person, Code, Lightbulb, TrendingUp, Security, BusinessCenter } from '@mui/icons-material';

const aboutStats = [
  { number: '10+', label: 'Years Experience', icon: <TrendingUp /> },
  { number: '50+', label: 'Projects Completed', icon: <BusinessCenter /> },
  { number: '99%', label: 'System Uptime', icon: <Security /> },
  { number: '24/7', label: 'Support Available', icon: <Person /> }
];

const aboutCards = [
  { 
    icon: <Person sx={{ fontSize: 40, color: '#2563eb' }} />, 
    title: 'Professional Summary', 
    description: 'Dedicated and detail-oriented IT Support Engineer with over 10 years of progressive experience in technical support, systems administration, and IT infrastructure management.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  { 
    icon: <Code sx={{ fontSize: 40, color: '#059669' }} />, 
    title: 'Core Expertise', 
    description: 'Proven ability to manage, maintain, and troubleshoot enterprise-level systems and networks. Specialized in ERP implementation, remote support, and network security solutions.',
    gradient: 'linear-gradient(135deg, #4ade80 0%, #059669 100%)'
  },
  { 
    icon: <Lightbulb sx={{ fontSize: 40, color: '#dc2626' }} />, 
    title: 'Professional Vision', 
    description: 'Strong communicator who thrives in collaborative environments, aiming to contribute technical expertise and leadership to drive organizational growth and digital transformation.',
    gradient: 'linear-gradient(135deg, #f87171 0%, #dc2626 100%)'
  }
];

const contactInfo = [
  { icon: <Email />, label: 'Email', value: 'Contact for Details', color: '#2563eb', actualValue: 'syamwaits@gmail.com' },
  { icon: <Phone />, label: 'Phone', value: 'Contact for Details', color: '#059669', actualValue: '+971523686232' },
  { icon: <LocationOn />, label: 'Location', value: 'Dubai, UAE', color: '#dc2626' },
  { icon: <LinkedIn />, label: 'LinkedIn', value: 'Available on Request', color: '#7c3aed', actualValue: 'linkedin.com/in/syam-kumar-62838172' }
];

export default function About() {
  return (
    <Box 
      id="about" 
      sx={{ 
        bgcolor: 'background.paper', 
        py: { xs: 6, md: 10 },
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
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
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              textAlign: 'center'
            }}
          >
            About Me
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ maxWidth: 600, mx: 'auto', fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.6, textAlign: 'center', px: { xs: 1, sm: 0 } }}
          >
            Discover the passion, expertise, and dedication behind innovative IT solutions
          </Typography>
        </Box>

        {/* Stats Section */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} mb={8} sx={{ justifyContent: 'center' }}>
          {aboutStats.map((stat, index) => (
            <Grid item xs={6} sm={6} md={3} key={index}>
              <Paper 
                elevation={0}
                sx={{
                  p: { xs: 2.5, sm: 3, md: 4 },
                  textAlign: 'center',
                  bgcolor: 'grey.800',
                  border: '2px solid rgba(100, 116, 139, 0.3)',
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  minHeight: { xs: '130px', sm: '140px', md: 'auto' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  aspectRatio: { xs: '1.2', md: 'auto' },
                  '&:hover': {
                    transform: { xs: 'translateY(-4px)', md: 'translateY(-8px)' },
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    borderColor: 'primary.main'
                  }
                }}
              >
                <Box sx={{ mb: { xs: 0.5, sm: 1, md: 2 }, color: '#2563eb', '& svg': { fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' } } }}>
                  {stat.icon}
                </Box>
                <Typography variant="h3" fontWeight={800} color="text.primary" gutterBottom sx={{ fontSize: { xs: '1.75rem', sm: '2rem', md: '3rem' }, lineHeight: 1.1 }}>
                  {stat.number}
                </Typography>
                <Typography variant="body1" color="text.secondary" fontWeight={500} sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem', md: '1rem' }, lineHeight: 1.2 }}>
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        
        {/* About Cards */}
        <Grid container spacing={{ xs: 3, md: 4 }} mb={8}>
          {aboutCards.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                elevation={0}
                sx={{ 
                  height: '100%',
                  bgcolor: 'background.paper',
                  border: '1px solid rgba(100, 116, 139, 0.3)',
                  borderRadius: 4,
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  minHeight: { xs: '280px', md: 'auto' },
                  '&:hover': {
                    transform: { xs: 'translateY(-4px)', md: 'translateY(-12px)' },
                    boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
                    '& .card-header': {
                      background: card.gradient
                    }
                  }
                }}
              >
                <Box 
                  className="card-header"
                  sx={{
                    height: { xs: 80, md: 100 },
                    background: 'grey.700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s ease',
                    '& svg': { fontSize: { xs: '2rem', md: '2.5rem' } }
                  }}
                >
                  <Box 
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      bgcolor: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                    }}
                  >
                    {card.icon}
                  </Box>
                </Box>
                                <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
                  <Typography variant="h5" fontWeight={700} mb={2} color="text.primary" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" lineHeight={1.7} sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}