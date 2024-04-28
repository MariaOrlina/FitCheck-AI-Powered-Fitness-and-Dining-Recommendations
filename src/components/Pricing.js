import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip'; 
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const defaultTheme = createTheme();

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      'Access to 10 basic fitness videos',
      'Community support',
      'Monthly wellness webinars',
      'Email support',
    ],
    buttonText: 'Start for free',
    buttonVariant: 'outlined',
    buttonLink: '/analytics',
  },
  {
    title: 'Professional',
    subheader: 'Most Popular',
    price: '15',
    description: [
      'Access to 50+ advanced fitness videos',
      'One-on-one coaching sessions',
      'Nutritional guidance plans',
      'Priority email support',
    ],
    buttonText: 'Click to know more',
    buttonVariant: 'contained',
    buttonLink: '/contact-trainer', // Updated navigation link
},
];

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        maxWidth="md"
        component="main"
        sx={{
          pt: 8,
          pb: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box marginTop={6}>
          <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
            Pricing Plans
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" component="p">
            Choose the plan that best fits your fitness journey and get started today!
          </Typography>
          <Grid container spacing={5} alignItems="flex-end" sx={{ mt: 3 }}>
            {tiers.map((tier) => (
              <Grid item key={tier.title} xs={12} sm={tier.title === 'Professional' ? 6 : 12} md={6}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    justifyContent: 'space-between',
                  }}
                >
                  <CardContent>
                    {tier.subheader && (
                      <Chip
                        icon={<AutoAwesomeIcon />}
                        label={tier.subheader}
                        sx={{ position: 'absolute', top: 16, right: 16 }}
                      />
                    )}
                    <Typography component="h2" variant="h3" color="text.primary">
                      {tier.title}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                      ${tier.price}/month
                    </Typography>
                    <Divider sx={{ my: 3 }} />
                    {tier.description.map(line => (
                      <Typography variant="subtitle1" align="left" key={line}>
                        <CheckCircleRoundedIcon sx={{ verticalAlign: 'middle' }} /> {line}
                      </Typography>
                    ))}
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant}
                      onClick={() => navigate(tier.buttonLink)}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
