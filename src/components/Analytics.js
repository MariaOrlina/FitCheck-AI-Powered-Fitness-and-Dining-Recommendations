// File: Analytics.js
import React from 'react';
import { Container, Box, Divider } from '@mui/material';
import FormAnalytics from './FormAnaytics';  // Make sure this path is correct
import FileAnalytics from './FileAnalytics';  // Make sure this path is correct

function Analytics() {
  return (
    <Container maxWidth="lg">
      <Box marginTop={12}>
        <FormAnalytics />
        <Divider />
        <FileAnalytics />
      </Box>
    </Container>
  );
}

export default Analytics;
