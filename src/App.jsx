import { Box, ThemeProvider } from "@mui/material";
import Navbar from "./Components/Navbar";
import theme from "./Styles/theme";
import { windowStyles } from "./Styles/styles";
import ChatContainer from "./Components/ChatContainer";
import BottomBar from "./Components/BottomBar"
const App = ()  => {
  return (
        <>
        <ThemeProvider theme={theme}>
        <Box sx={windowStyles.window}>
        <Navbar/>
        <ChatContainer/>
        <BottomBar/>
        </Box>
        </ThemeProvider>
        </>
  );
}

export default App;
