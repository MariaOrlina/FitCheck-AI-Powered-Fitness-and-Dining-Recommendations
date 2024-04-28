import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, TextField, Typography, Snackbar, InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // A nice shade of blue
    },
    secondary: {
      main: '#dc004e', // A vibrant pink
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginTop: '12px',
          marginBottom: '12px',
        },
      },
    },
  },
});

export default function ContactForm() {
    const [contact, setContact] = useState({ name: '', email: '', phone: '', trainer: '' });
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setContact({ ...contact, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(contact); // Debugging output
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        navigate('/'); // Navigate back to home after submission
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 12,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        bgcolor: '#f7f7f7', // Light grey background
                        p: 3,
                        borderRadius: 2,
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    }}
                >
                    <Typography component="h1" variant="h5" color="secondary">
                        Contact Us
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            required
                            id="name"
                            label="Full Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            value={contact.name}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon color="primary" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            fullWidth
                            required
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={contact.email}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon color="primary" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            fullWidth
                            required
                            name="phone"
                            label="Phone Number"
                            type="phone"
                            id="phone"
                            autoComplete="tel"
                            value={contact.phone}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneIcon color="primary" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            fullWidth
                            required
                            name="trainer"
                            label="Trainer Interested In"
                            type="text"
                            id="trainer"
                            autoComplete="off"
                            value={contact.trainer}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FitnessCenterIcon color="primary" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                    <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Trainer will contact you with payment details"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    />
                </Box>
            </Container>
        </ThemeProvider>
    );
}
