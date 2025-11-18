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
      
      {/* Contact Information Section */}
      <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
        <Typography 
          variant="h4" 
          fontWeight={700} 
          color="#fff" 
          gutterBottom
          sx={{ 
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
            mb: { xs: 2, md: 3 }
          }}
        >
          Contact Information
        </Typography>
        <Typography 
          variant="body1" 
          color="rgba(255, 255, 255, 0.8)" 
          sx={{ 
            fontSize: { xs: '1rem', md: '1.1rem' },
            maxWidth: 700,
            mx: 'auto',
            mb: { xs: 4, md: 6 }
          }}
        >
          Let's connect and discuss how we can work together on your next project.
        </Typography>
          
        <Grid container spacing={{ xs: 3, sm: 4 }} sx={{ justifyContent: 'center', mb: { xs: 6, md: 8 } }}>
          {contactMethods.map((method, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                component={method.link ? "a" : "div"}
                href={method.link || undefined}
                target={method.link ? "_blank" : undefined}
                rel={method.link ? "noopener noreferrer" : undefined}
                sx={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: 4,
                  transition: 'all 0.4s ease',
                  cursor: method.link ? 'pointer' : 'default',
                  textDecoration: 'none',
                  minHeight: { xs: '180px', sm: '200px' },
                  display: 'flex',
                  '&:hover': method.link ? {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                    borderColor: 'rgba(103, 126, 234, 0.5)',
                    background: 'linear-gradient(135deg, rgba(103, 126, 234, 0.1), rgba(118, 75, 162, 0.05))'
                  } : {}
                }}
                >
                <CardContent sx={{ 
                  p: { xs: 3, sm: 4 }, 
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  position: 'relative'
                }}>
                  <Box 
                    sx={{ 
                      mb: { xs: 2, sm: 2.5 },
                      p: { xs: 2, sm: 2.5 },
                      borderRadius: '50%',
                      background: index === 0 ? 'linear-gradient(135deg, #667eea, #764ba2)' :
                                 index === 1 ? 'linear-gradient(135deg, #f093fb, #f5576c)' :
                                 index === 2 ? 'linear-gradient(135deg, #4facfe, #00f2fe)' :
                                 'linear-gradient(135deg, #43e97b, #38f9d7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: { xs: 64, sm: 72 },
                      height: { xs: 64, sm: 72 },
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                      '& svg': { color: '#fff', fontSize: { xs: 24, sm: 28 } }
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
      </Box>

      {/* Contact Form Section */}
      <Grid container spacing={{ xs: 3, md: 4 }} sx={{ justifyContent: 'center' }}>
        
        <Grid item xs={12} md={8} lg={6}>
          <Card 
          sx={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
            backdropFilter: 'blur(30px)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 4,
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
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