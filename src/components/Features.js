import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Fade } from '@mui/material';

export default function Features() {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Fade in timeout={800}>
      <Container id="features" sx={{ py: { xs: 8, sm: 16 }, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
          Empower Your Fitness Journey
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
          Welcome to FitCheck!
          <br />
          Track, train, and thrive with our all-in-one fitness platform.
          <br />
          <strong>Data-driven insights:</strong> Track everything from weight to heart rate.
          <br />
          <strong>Expert guidance:</strong> Get matched with a trainer for personalized plans.
          <br />
          <strong>Recommended resources:</strong> Stay informed with curated workouts and recipes.
          <br />
          <strong>Stay updated:</strong> Explore our blog for the latest fitness trends.
        </Typography>

        <Box sx={{
          bgcolor: theme.palette.primary.main, // Set background color to theme's primary main color
          boxShadow: 3, // Subtle shadow
          border: 1,
          borderColor: 'divider',
          p: 3,
          mb: 4,
          mx: 'auto',
          maxWidth: '80%',
          borderRadius: 2, // Rounded corners
        }}>
          <Typography variant="h5" gutterBottom component="div" sx={{ color: theme.palette.primary.light }}>
            Fitness Boost: Simple Tips
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.primary.contrastText, whiteSpace: 'pre-line' }}>
            Feeling stuck? Here's your fitness toolkit:
            {"\n\n"}<strong>Mix it up:</strong> Try new activities to keep things fun and challenge your body.
            {"\n"}<strong>Find a friend:</strong> Exercise with a buddy for motivation and support.
            {"\n"}<strong>Celebrate small wins:</strong> Every workout counts! Don't get discouraged by setbacks.
            {"\n"}<strong>Eat healthy:</strong> Fuel your body with good food for better performance.
            {"\n"}<strong>Listen to your body:</strong> Rest when needed to avoid injury.
            {"\n"}<strong>Sleep well:</strong> Aim for 7-8 hours for optimal recovery.
            {"\n"}<strong>Drink water:</strong> Stay hydrated throughout the day for peak performance.
            {"\n"}<strong>Track progress:</strong> Use a simple tool to monitor your workouts and stay motivated.
            {"\n"}<strong>Do what you enjoy:</strong> Make exercise fun! Find activities you actually like.
            {"\n"}<strong>Set goals:</strong> Keep it simple and achievable to celebrate milestones.
          </Typography>
        </Box>

        <Button variant="contained" color="primary" sx={{ boxShadow: 2, ':hover': { boxShadow: 6 } }} onClick={() => navigate('/get-started')}>
          Get Started
        </Button>
      </Container>
    </Fade>
  );
}
