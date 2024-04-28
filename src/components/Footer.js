import * as React from 'react';
import { useState } from 'react';
import { Box, Button, Container, Typography, TextField, Snackbar, Link, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const logoStyle = {
  width: '80px',
  height: '70px',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="https://mui.com/">FitCheck&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const [name, setName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [subscriptionEmail, setSubscriptionEmail] = useState('');
  const [issue, setIssue] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCustomerEmailChange = (event) => {
    setCustomerEmail(event.target.value);
  };

  const handleSubscriptionEmailChange = (event) => {
    setSubscriptionEmail(event.target.value);
  };

  const handleIssueChange = (event) => {
    setIssue(event.target.value);
  };

  const handleSubscribe = () => {
    setSnackbarMessage('Subscription successful');
    setOpenSnackbar(true);
    // Optionally clear the subscription email field after successful subscription
    setSubscriptionEmail('');
  };

  const handleSubmitIssue = () => {
    setSnackbarMessage('Issue submitted successfully');
    setOpenSnackbar(true);
    // Clear the form fields after submission
    setName('');
    setCustomerEmail('');
    setIssue('');
  };

  const handleCloseSnackbar = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <img
              src="https://img.icons8.com/matisse/100/strength.png"
              style={logoStyle}
              alt="logo of FitCheck"
            />
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Subscribe to our newsletter for weekly updates and promotions.
            </Typography>
            {/* Subscription Form */}
            <Stack direction="column" spacing={1}>
              <TextField
                value={subscriptionEmail}
                onChange={handleSubscriptionEmailChange}
                id="subscription-email"
                label="Email"
                variant="outlined"
                fullWidth
                size="small"
                placeholder="Your email address"
                autoComplete="off"
              />
              <Button variant="contained" color="primary" onClick={handleSubscribe}>
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Copyright />
        </div>
        {/* Issue Submission Section */}
        <Stack
          direction="column"
          spacing={1}
          sx={{
            color: 'text.secondary',
          }}
        >
          <Typography variant="body2" fontWeight={600} gutterBottom>
            Contact Customer Service
          </Typography>
          <TextField
            value={name}
            onChange={handleNameChange}
            id="name"
            label="Name"
            variant="outlined"
            fullWidth
            size="small"
            autoComplete="off"
            placeholder="Your Name"
          />
          <TextField
            value={customerEmail}
            onChange={handleCustomerEmailChange}
            id="customer-email"
            label="Email"
            variant="outlined"
            fullWidth
            size="small"
            autoComplete="off"
            placeholder="Your Email"
          />
          <TextField
            value={issue}
            onChange={handleIssueChange}
            id="issue"
            label="Issue"
            variant="outlined"
            fullWidth
            size="small"
            multiline
            rows={4}
            autoComplete="off"
            placeholder="Describe Your Issue"
          />
          <Button variant="contained" color="primary" onClick={handleSubmitIssue}>
            Submit Issue
          </Button>
        </Stack>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Container>
  );
}
