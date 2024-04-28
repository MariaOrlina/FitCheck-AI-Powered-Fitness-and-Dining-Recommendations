import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ArticleIcon from '@mui/icons-material/Article';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

const items = [
  {
    icon: <AssessmentIcon />,
    title: 'Track Your Progress',
    description:
      'Log your weight, calories burned and consumed, heart rate, and more. Gain valuable insights into your fitness journey.',
  },
  {
    icon: <PersonIcon />,
    title: 'Personalized Training',
    description:
      'Get matched with a qualified trainer for one-on-one sessions tailored to your unique needs and goals. Achieve results faster with expert support.',
  },
  {
    icon: <FitnessCenterIcon />,
    title: 'Recommended Resources',
    description:
      'Personalized fitness plans, workout routines, and healthy recipes curated based on your progress and preferences.',
  },
  {
    icon: <ArticleIcon />,
    title: 'Stay Informed',
    description:
      'Our blog is packed with the latest fitness trends, workout tips, and nutritional advice. Stay motivated and well-informed.',
  },
  {
    icon: <SubscriptionsIcon />,
    title: 'Subscribe for More',
    description:
      'Subscribe to access exclusive content, personalized plans, and advanced features. Stay on the leading edge of fitness!',
  },
  {
    icon: <DirectionsRunIcon />,
    title: 'Interactive Feedback',
    description:
      'Provide inputs like weight, calories, and heart rate to receive analysis and feedback that helps optimize your workouts and diet.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Fitness Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Discover how our services can transform your fitness journey with technology-driven solutions and expert guidance.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
