import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { bottomBarStyles } from '../Styles/styles';
import { Container, Typography,IconButton,Avatar, Toolbar } from '@mui/material';

const BottomBar = ()=>  {
        const getImagePath = (avatar) => {
                return require(`../Imgs/${avatar}`);
        }
  return (
    <Box>
        <Container>
      <Toolbar sx={bottomBarStyles.default}>
        <Typography sx={bottomBarStyles.bottomBarBrand}>Logo</Typography>
        
        <Box sx={bottomBarStyles.socials}>
        <Typography align="right" variant='p'>Contact@00000000.tech</Typography>
                <Box sx={bottomBarStyles.socialIcons}>
                <IconButton sx={{padding:0}}> <Avatar size="small" alt="Remy Sharp" sx={{ width: "31.3px",padding:1, height: "32px", }} src={getImagePath("Socials/Group 143726563.png")} /> </IconButton>
                <IconButton sx={{padding:0}}> <Avatar size="small" alt="Remy Sharp" sx={{ width: "31.3px",padding:1, height: "32px", }} src={getImagePath("Socials/Group 143726564.png")} /> </IconButton>
                <IconButton sx={{padding:0}}> <Avatar size="small" alt="Remy Sharp" sx={{ width: "31.3px",padding:1, height: "32px", }} src={getImagePath("Socials/Group 143726565.png")} /> </IconButton>
                </Box>
        </Box>
      </Toolbar>                
        </Container>

    </Box>
  );
}
export default BottomBar