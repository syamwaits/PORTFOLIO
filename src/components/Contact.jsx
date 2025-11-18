import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button, TextField } from '@mui/material';
import { Email, LinkedIn, Phone, LocationOn, Send } from '@mui/icons-material';

const contactMethods = [
  { icon: <Email />, title: 'Email', value: 'Click to Send Email', link: 'mailto:syamwaits@gmail.com' },
  { icon: <Phone />, title: 'Phone', value: 'Click to Call', link: 'tel:+971523686232' },
  { icon: <LinkedIn />, title: 'LinkedIn', value: 'View Profile', link: 'https://www.linkedin.com/in/syam-kumar-62838172' },
  { icon: <LocationOn />, title: 'Location', value: 'Dubai, UAE', link: null }
];

export default function Contact() {
  return (
    <Box 
      id="contact" 
      sx={{ 
        py: { xs: 6, md: 10 },
        bgcolor: 'background.default'
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
      <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
        <Typography 
          variant="h2" 
          fontWeight={800} 
          sx={{ 
            mb: { xs: 1.5, md: 2 },
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
            background: 'linear-gradient(45deg, #fff, #e0e0e0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center'
          }}
        >
          Get in Touch
        </Typography>
        <Typography 
          variant="h6" 
          color="rgba(255, 255, 255, 0.8)" 
          maxWidth={600} 
          mx="auto"
          textAlign="center"
          sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, px: { xs: 1, sm: 0 } }}
        >
          Have a project in mind? Want to discuss opportunities? I'd love to hear from you.
        </Typography>
      </Box>
      
      <Grid container spacing={{ xs: 3, md: 4 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: { xs: 3, md: 4 } }}>
            <Typography 
              variant="h4" 
              fontWeight={700} 
              color="#fff" 
              gutterBottom
              sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' } }}
            >
              Contact Information
            </Typography>
            <Typography 
              variant="body1" 
              color="rgba(255, 255, 255, 0.8)" 
              sx={{ mb: { xs: 3, md: 4 }, fontSize: { xs: '0.95rem', md: '1rem' } }}
            >
              Let's connect and discuss how we can work together on your next project.
            </Typography>
          </Box>
          
          <Grid container spacing={{ xs: 2, sm: 3 }}>
            {contactMethods.map((method, index) => (
              <Grid item xs={6} sm={6} md={12} lg={6} key={index}>
                <Card 
                  component={method.link ? "a" : "div"}
                  href={method.link || undefined}
                  target={method.link ? "_blank" : undefined}
                  rel={method.link ? "noopener noreferrer" : undefined}
                  sx={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    cursor: method.link ? 'pointer' : 'default',
                    textDecoration: 'none',
                    '&:hover': method.link ? {
                      transform: 'translateY(-5px) scale(1.02)',
                      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)'
                    } : {}
                  }}
                >
                  <CardContent sx={{ 
                    p: { xs: 2, sm: 3 }, 
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: { xs: '140px', sm: '160px' }
                  }}>
                    <Box 
                      sx={{ 
                        mb: { xs: 1, sm: 1.5 },
                        p: { xs: 1.5, sm: 2 },
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: { xs: 48, sm: 56 },
                        height: { xs: 48, sm: 56 },
                        '& svg': { color: '#fff', fontSize: { xs: 20, sm: 24 } }
                      }}
                    >
                      {method.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      fontWeight={600} 
                      color="#fff" 
                      gutterBottom
                      sx={{ 
                        fontSize: { xs: '1rem', sm: '1.1rem' },
                        textAlign: 'center',
                        mb: { xs: 0.5, sm: 1 }
                      }}
                    >
                      {method.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="rgba(255, 255, 255, 0.8)"
                      sx={{ 
                        fontSize: { xs: '0.8rem', sm: '0.9rem' },
                        lineHeight: 1.4,
                        textAlign: 'center',
                        wordBreak: 'break-word',
                        maxWidth: '100%',
                        mx: 'auto'
                      }}
                    >
                      {method.value}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card 
            sx={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 4,
              mt: { xs: 2, md: 0 }
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography 
                variant="h5" 
                fontWeight={700} 
                color="#fff" 
                gutterBottom
                sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
              >
                Send a Message
              </Typography>
              <Box component="form" sx={{ mt: { xs: 2, md: 3 } }}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  sx={{ 
                    mb: { xs: 2.5, md: 3 },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.3)'
                      }
                    }
                  }}
                  InputProps={{ 
                    style: { 
                      color: 'inherit'
                    } 
                  }}
                  InputLabelProps={{ 
                    style: { 
                      color: 'inherit'
                    } 
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  sx={{ 
                    mb: { xs: 2.5, md: 3 },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.3)'
                      }
                    }
                  }}
                  InputProps={{ 
                    style: { 
                      color: 'inherit'
                    } 
                  }}
                  InputLabelProps={{ 
                    style: { 
                      color: 'inherit'
                    } 
                  }}
                />
                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  sx={{ 
                    mb: { xs: 2.5, md: 3 },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.3)'
                      }
                    }
                  }}
                  InputProps={{ 
                    style: { 
                      color: 'inherit'
                    } 
                  }}
                  InputLabelProps={{ 
                    style: { 
                      color: 'inherit'
                    } 
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  sx={{ 
                    mb: { xs: 2.5, md: 3 },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.3)'
                      }
                    }
                  }}
                  InputProps={{ 
                    style: { 
                      color: 'inherit'
                    } 
                  }}
                  InputLabelProps={{ 
                    style: { 
                      color: 'inherit'
                    } 
                  }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  startIcon={<Send />}
                  sx={{
                    py: { xs: 1.5, md: 2 },
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    fontWeight: 700,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #5a6fd8, #6b42a0)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
                    }
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
}