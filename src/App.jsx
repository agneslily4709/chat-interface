import React from 'react';
import { Box, ThemeProvider } from '@mui/material';
import Navbar from './Components/Navbar';
import ChatContainer from './Components/ChatContainer';
import BottomBar from './Components/BottomBar';
import theme from './Styles/theme';
import { windowStyles } from './Styles/styles';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={windowStyles.window}>
          <Navbar />
          <ChatContainer />
          <BottomBar />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;