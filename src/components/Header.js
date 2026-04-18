import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';

// ✅ Import your logo here
import PageLogo from '../images/GLOSSY-LOGO.png';

const pages = ['Home', 'About', 'Skills', 'Projects'];

export default function PortfolioHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'hsla(214, 18%, 15%, 0.00)', // transparent header
        backdropFilter: 'blur(100px)', // blur effect
        boxShadow: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo + Name (Desktop) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 4 }}>
            <img
              src={PageLogo}
              alt="Logo"
              style={{
                width: '30px',
                height: '30px',
                marginRight: '10px',
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#home"
              sx={{
                fontFamily: 'calibri',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              GINO ARELLANO
            </Typography>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  backgroundColor: 'hsla(214, 18%, 15%, 0.95)', // same as header
                  color: 'white',
                  backdropFilter: 'blur(100px)',
                  boxShadow: 'none',
                  border: '1px solid rgba(255,255,255,0.2)',
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  component={NavLink}
                  to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                  onClick={handleCloseNavMenu}
                  style={({ isActive }) => ({
                    fontWeight: isActive ? 'bold' : 'normal',
                    color: isActive ? '#9fc6f3ff' : 'white',
                  })}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo + Name */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', flexGrow: 1 }}>
            <img
              src={PageLogo}
              alt="Logo"
              style={{
                width: '30px',
                height: '30px',
                marginRight: '8px',
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#home"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              GINO
            </Typography>
          </Box>

          {/* Desktop Nav Links */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                component={NavLink}
                to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                onClick={handleCloseNavMenu}
                style={({ isActive }) => ({
                  color: isActive ? '#9fc6f3ff' : 'white',
                  fontWeight: isActive ? 'bold' : 500,
                  borderBottom: isActive ? '2px solid #9fc6f3ff' : 'none',
                  transition: '0.3s',
                })}
                sx={{
                  my: 2,
                  display: 'block',
                  '&:hover': { color: '#9fc6f3ff' },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
