import React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <FormControlLabel
      control={<Switch checked={showCustomTheme} onChange={toggleCustomTheme} />}
      label="Toggle Custom Theme"
    />
  );
}

export default ToggleCustomTheme;
