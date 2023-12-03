import * as React from 'react';
import {Typography, Button, Tooltip, Menu, MenuItem, Container, Divider,AppBar, Toolbar, Box, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import HomeIcon from '@mui/icons-material/Home';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import CreateIcon from '@mui/icons-material/Create';
import styles from '../Styles/styles';
import theme from '../Styles/theme';

const navItems = [{navItemName:'Explore',iconName:<HomeIcon sx={{ fontSize: 20, mr:1 }}/>,color:theme.palette.primary.main}, {navItemName:'Create',iconName:<CreateIcon sx={{ fontSize: 20, mr:1 }}/>,color:theme.palette.text.primary}, {navItemName:'Edit',iconName:<AutoFixHighOutlinedIcon sx={{ fontSize: 20, mr:1 }}/>,color:theme.palette.text.primary}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={styles.navbar}>
      <Container>
        <Toolbar disableGutters>
        <Box sx={styles.navItems}>
        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} sx={{color:theme.palette.primary.main}}>
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left'}} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{display: { xs: 'block', md: 'none' }}}>
              {navItems.map((navItem, idx) => (
                <MenuItem key={idx} onClick={handleCloseNavMenu} sx={styles.navbarDropdown}>
                  <Typography textAlign="center">{navItem.navItemName}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> 
          <Typography variant="h6" noWrap component="a" href="/" sx={styles.navbarBrand}> Logo</Typography>
          <Divider orientation="vertical" variant="middle" sx={styles.brandDivider}></Divider>
           {/* <Typography variant="h5" noWrap component="a" href="/" sx={styles.navbarBrand}> Logo</Typography> */}
          <Box sx={styles.navOptions}>
            {navItems.map((navItem, idx) => (
              <Button key={idx} onClick={handleCloseNavMenu} sx={{color:navItem.color, textTransform: 'capitalize' }}>{navItem.iconName} {navItem.navItemName}</Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                        <Button sx={styles.loginButton} variant='contained'>Login</Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
