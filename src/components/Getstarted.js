import React from 'react';
import { Avatar, Button, CssBaseline, Typography, Paper, Box, Grid, Link, Card, CardContent } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: '0 3px 5px 2px rgba(25, 118, 210, .3)',
        },
      },
    },
  },
});

const trainers = [
  {
    name: "Maria Rodriguez",
    specialty: "Strength Training & Bodybuilding",
    description: "Maria is a certified personal trainer with a passion for helping people achieve their physique goals. She utilizes a combination of weightlifting, bodyweight exercises, and proper nutrition coaching to build muscle and sculpt your dream body.",
    calendlyLink: "https://calendly.com/maria-rodriguez"
  },
  {
    name: "David Lee",
    specialty: "HIIT & Cardio Conditioning",
    description: "Get ready to sweat! David specializes in high-intensity interval training (HIIT) and cardio conditioning programs designed to burn calories, boost metabolism, and increase endurance. His energetic sessions are perfect for those who want to challenge themselves and see fast results.",
    calendlyLink: "https://calendly.com/david-lee"
  },
  {
    name: "Sarah Jones",
    specialty: "Yoga & Flexibility",
    description: "Sarah is a certified yoga instructor who believes in the power of yoga for both physical and mental well-being. Her classes focus on improving flexibility, strength, balance, and mindfulness, leaving you feeling centered and energized.",
    calendlyLink: "https://calendly.com/sarah-jones"
  },
  {
    name: "Michael Brown",
    specialty: "Running & Endurance Training",
    description: "Hit the pavement with Michael, a certified running coach who can help you achieve your running goals, whether you're a beginner training for your first 5K or a seasoned runner looking to improve your race times.",
    calendlyLink: "https://calendly.com/michael-brown"
  },
  {
    name: "Emily Garcia",
    specialty: "Prenatal & Postnatal Fitness",
    description: "Emily is a certified pre and postnatal fitness specialist who understands the unique needs of moms-to-be and new mothers. Her safe and effective programs help women stay active and healthy throughout pregnancy and postpartum recovery.",
    calendlyLink: "https://calendly.com/emily-garcia"
  }
];

export default function GetStarted() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh', overflow: 'auto' }}>
        <CssBaseline />
        <Grid item xs={12} md={12} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 14,
              mx: 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
              Meet Our Trainers
            </Typography>
            {trainers.map(trainer => (
              <Card key={trainer.name} sx={{ width: '100%', mb: 4, overflow: 'visible' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 56, height: 56 }}>
                    <Typography variant="h5" color="common.white">{trainer.name[0]}</Typography>
                  </Avatar>
                  <Typography variant="h6" component="div">{trainer.name}</Typography>
                  <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>{trainer.specialty}</Typography>
                  <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>{trainer.description}</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mb: 2 }}
                    component={Link}
                    href={trainer.calendlyLink}
                    target="_blank"
                  >
                    Schedule Appointment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
