
import React from 'react';
import { Container, Typography, Button, Box, Avatar, Grid, Chip, Toolbar } from '@mui/material';
import { Download, Email, LocationOn, WorkOutline } from '@mui/icons-material';
import profileImg from '../assets/profile.jpg';

const highlights = ['10+ Years Experience', 'ERP Specialist', 'Network Security', 'System Administration'];

export default function Hero() {
  return (
    <Box 
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #0f172a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: 8,
        transition: 'background 0.5s ease'
      }}
    >
      {/* Animated Background Elements */}
      <Box sx={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
        animation: 'float 6s ease-in-out infinite'
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
        animation: 'float 4s ease-in-out infinite reverse'
      }} />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, px: { xs: 2, sm: 3 } }}>
        <Grid container spacing={{ xs: 4, lg: 6 }} alignItems="center" justifyContent="center">
          <Grid item xs={12} lg={6} order={{ xs: 2, lg: 1 }}>
            <Box sx={{ color: '#fff', textAlign: 'center', px: { xs: 1, sm: 2, lg: 0 } }}>
              <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                <Chip 
                  icon={<LocationOn />}
                  label="Dubai, UAE"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.2)',
                    color: '#fff',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    mb: 2
                  }}
                />
              </Box>
              
              <Typography 
                variant="h1" 
                sx={{ 
                  fontWeight: 800,
                  mb: { xs: 2, lg: 2 },
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '4.5rem', lg: '5rem' },
                  background: 'linear-gradient(45deg, #fff 30%, #e0e7ff 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.1,
                  textAlign: 'center'
                }}
              >
                Syam Kumar
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                <WorkOutline sx={{ mr: 1, color: 'rgba(255,255,255,0.8)' }} />
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.5rem' },
                    color: 'rgba(255,255,255,0.95)',
                    textAlign: 'center'
                  }}
                >
                  IT Consultant
                </Typography>
              </Box>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'rgba(255,255,255,0.85)',
                  mb: 4,
                  lineHeight: 1.7,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.4rem' },
                  maxWidth: { xs: '100%', sm: 500, lg: 600 },
                  mx: 'auto',
                  textAlign: 'center',
                  px: { xs: 1, sm: 0 }
                }}
              >
                Dedicated IT professional with 10+ years of experience in enterprise systems, 
                ERP solutions, and network infrastructure. Specialized in delivering robust 
                IT solutions for dynamic organizations.
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1, sm: 1.5 }, mb: 4, justifyContent: 'center' }}>
                {highlights.map((highlight, index) => (
                  <Chip
                    key={index}
                    label={highlight}
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.15)',
                      color: '#fff',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      fontWeight: 500,
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.25)'
                      }
                    }}
                  />
                ))}
              </Box>
              
              <Box sx={{ display: 'flex', gap: { xs: 2, sm: 3 }, flexWrap: 'wrap', justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
                <Button 
                  variant="contained" 
                  size="large"
                  startIcon={<Download />}
                  component="a"
                  href="/Syamkumar_Professional_Resume.pdf"
                  download="Syamkumar_Professional_Resume.pdf"
                  sx={{ 
                    bgcolor: '#fff',
                    color: '#667eea',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    px: 4,
                    py: 2,
                    borderRadius: 4,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    textDecoration: 'none',
                    '&:hover': { 
                      bgcolor: '#f8fafc',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.4)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Download CV
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  startIcon={<Email />}
                  sx={{ 
                    borderColor: 'rgba(255,255,255,0.8)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    px: 4,
                    py: 2,
                    borderRadius: 4,
                    borderWidth: 2,
                    backdropFilter: 'blur(10px)',
                    '&:hover': { 
                      borderColor: '#fff',
                      bgcolor: 'rgba(255,255,255,0.1)',
                      transform: 'translateY(-3px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Get In Touch
                </Button>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} lg={6} order={{ xs: 1, lg: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', mb: { xs: 4, lg: 0 }, mt: { xs: 4, sm: 6, lg: 3 } }}>
              {/* Decorative rings */}
              <Box sx={{
                position: 'absolute',
                width: { xs: 300, sm: 350, lg: 400 },
                height: { xs: 300, sm: 350, lg: 400 },
                border: '2px solid rgba(255,255,255,0.1)',
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                animation: 'rotate 20s linear infinite'
              }} />
              <Box sx={{
                position: 'absolute',
                width: { xs: 350, sm: 400, lg: 450 },
                height: { xs: 350, sm: 400, lg: 450 },
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                animation: 'rotate 25s linear infinite reverse'
              }} />
              
              <Avatar
                src={profileImg}
                alt="Syam Kumar"
                sx={{
                  width: { xs: 250, sm: 280, md: 350, lg: 380 },
                  height: { xs: 250, sm: 280, md: 350, lg: 380 },
                  border: { xs: '4px solid rgba(255,255,255,0.3)', lg: '6px solid rgba(255,255,255,0.3)' },
                  boxShadow: '0 25px 80px rgba(0,0,0,0.4)',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  zIndex: 3,
                  '& img': {
                    objectFit: 'cover',
                    objectPosition: { xs: 'center top', sm: 'center center' },
                    width: '100%',
                    height: '100%'
                  },
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 30px 100px rgba(0,0,0,0.5)'
                  }
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}