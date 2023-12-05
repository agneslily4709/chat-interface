import React, { useState } from 'react';
import {
  Typography,
  Button,
  Tooltip,
  Menu,
  MenuItem,
  Container,
  Divider,
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { navbarStyles } from '../Styles/styles';
import theme from '../Styles/theme';

const getImagePath = (avatar) => {
  return require(`../Imgs/${avatar}`);
};

const navItems = [
  {
    navItemName: 'Explore',
    iconName: (
      <Avatar
        src={getImagePath('Icons/icons 1.png')}
        sx={{ width: '31.3px', p: 1, height: '32px', mr: 1 }}
      />
    ),
    color: theme.palette.text.contrast,
  },
  {
    navItemName: 'Create',
    iconName: (
      <Avatar
        src={getImagePath('Icons/icons 2.png')}
        sx={{ width: '31.3px', p: 1, height: '32px', mr: 1 }}
      />
    ),
    color: theme.palette.text.white,
  },
  {
    navItemName: 'Edit',
    iconName: (
      <Avatar
        src={getImagePath('Icons/icons 3.png')}
        sx={{ width: '31.3px', p: 1, height: '32px', mr: 1 }}
      />
    ),
    color: theme.palette.text.white,
  },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar position="static" sx={navbarStyles.navbar}>
      <Container>
        <Toolbar disableGutters>
          <Box sx={navbarStyles.navItems}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: theme.palette.text.contrast }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }, p: 0 }}
              MenuListProps={{ sx: { py: 0 } }}
            >
              {navItems.map((navItem, idx) => (
                <MenuItem dense={true} key={idx} onClick={handleCloseNavMenu} sx={navbarStyles.navbarDropdown}>
                  <Typography textAlign="center" variant="p" gutterBottom>
                    {navItem.iconName}
                    {navItem.navItemName}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography component="a" href="/" sx={navbarStyles.navbarBrand}>
            Logo
          </Typography>
          <Divider orientation="vertical" variant="middle" sx={navbarStyles.brandDivider}></Divider>
          <Box sx={navbarStyles.navOptions}>
            {navItems.map((navItem, idx) => (
              <Button
                key={idx}
                onClick={handleCloseNavMenu}
                sx={{ color: navItem.color, textTransform: 'capitalize' }}
              >
                {navItem.iconName} {navItem.navItemName}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Button sx={navbarStyles.loginButton} variant="contained">
                Login
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;