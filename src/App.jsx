import { Box, ThemeProvider } from "@mui/material";
import Navbar from "./Components/Navbar";
import theme from "./Styles/theme";
import { windowStyles } from "./Styles/styles";
import ChatContainer from "./Components/ChatContainer";

const App = ()  => {
  return (
        <>
        <ThemeProvider theme={theme}>
                <Box sx={windowStyles.window}>
                        <Navbar/>
                        <ChatContainer/>
                </Box>
        </ThemeProvider>
        </>
  );
}

export default App;
