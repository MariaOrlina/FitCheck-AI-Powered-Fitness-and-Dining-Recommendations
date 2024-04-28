import * as React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import MenuItem from '@mui/material/MenuItem';
import Getstarted from './Getstarted';
import Analytics from './Analytics';
import Blog from './Blog';
import RFU from './rfu';
const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <Link to="/">
              <img width="80" height="70" src="https://img.icons8.com/matisse/100/strength.png" alt="strength"/>
              </Link>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Link to="/Getstarted" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem sx={{ py: '6px', px: '12px' }}>
                    <Typography variant="body2" color="text.primary">
                      Get Started
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="Pricing" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem sx={{ py: '6px', px: '12px' }}>
                    <Typography variant="body2" color="text.primary">
                      Pricing
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="/Analytics" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem sx={{ py: '6px', px: '12px' }}>
                    <Typography variant="body2" color="text.primary">
                      Analytics
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="/Blog" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem sx={{ py: '6px', px: '12px' }}>
                    <Typography variant="body2" color="text.primary">
                      Blogs
                    </Typography>
                  </MenuItem>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <Button
                color="primary"
                variant="contained"
                size="small"
                component={Link}
                to="/recommendation"
              >
                Recommendation
              </Button>
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Define Routes */}
      <Routes>
      <Route path="/Getstarted" element={<Getstarted />} />
        <Route path="/Recommendation" element={<RFU />} />
      </Routes>
    </>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
