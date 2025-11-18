import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, Container } from '@mui/material';
import { Menu, Close } from '@mui/icons-material';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

const scrollToSection = (id) => {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          background: scrolled 
            ? 'rgba(15, 23, 42, 0.95)'
            : 'rgba(15, 23, 42, 0.3)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled 
            ? '1px solid rgba(100, 116, 139, 0.3)'
            : '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 800, 
                letterSpacing: 2, 
                color: scrolled ? 'primary.main' : '#fff',
                fontSize: { xs: '1.5rem', md: '1.8rem' },
                transition: 'color 0.3s ease'
              }}
            >
              SYAM KUMAR
            </Typography>
            
            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button 
                  key={item.id} 
                  onClick={() => scrollToSection(item.id)}
                  sx={{ 
                    color: scrolled ? 'text.primary' : '#fff', 
                    fontWeight: 600,
                    fontSize: '1rem',
                    textTransform: 'none',
                    px: 3,
                    py: 1,
                    borderRadius: 3,
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: scrolled 
                        ? 'rgba(37, 99, 235, 0.1)' 
                        : 'rgba(255, 255, 255, 0.15)',
                      transform: 'translateY(-2px)'
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -2,
                      left: '50%',
                      width: 0,
                      height: 2,
                      backgroundColor: scrolled ? 'primary.main' : '#fff',
                      transition: 'all 0.3s ease',
                      transform: 'translateX(-50%)'
                    },
                    '&:hover::after': {
                      width: '80%'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { md: 'none' } }}>
              <IconButton 
                sx={{ 
                  color: scrolled ? 'primary.main' : '#fff',
                  transition: 'color 0.3s ease'
                }}
                onClick={() => setMobileOpen(true)}
              >
                <Menu />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
      {/* Mobile Drawer */}
      <Drawer 
        anchor="right" 
        open={mobileOpen} 
        onClose={() => setMobileOpen(false)}
        sx={{ 
          '& .MuiDrawer-paper': { 
            background: 'rgba(15, 23, 42, 0.95)', 
            backdropFilter: 'blur(20px)',
            width: 280,
            borderLeft: '1px solid rgba(100, 116, 139, 0.3)'
          }
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
              Menu
            </Typography>
            <IconButton 
              onClick={() => setMobileOpen(false)} 
              sx={{ 
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'rgba(37, 99, 235, 0.1)'
                }
              }}
            >
              <Close />
            </IconButton>
          </Box>
          <List sx={{ p: 0 }}>
            {navItems.map((item) => (
              <ListItem 
                key={item.id} 
                button 
                onClick={() => { 
                  scrollToSection(item.id); 
                  setMobileOpen(false); 
                }}
                sx={{
                  borderRadius: 3,
                  mb: 1,
                  '&:hover': {
                    bgcolor: 'rgba(37, 99, 235, 0.1)'
                  }
                }}
              >
                <Typography 
                  sx={{ 
                    color: 'text.primary', 
                    fontWeight: 600,
                    fontSize: '1.1rem'
                  }}
                >
                  {item.label}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}