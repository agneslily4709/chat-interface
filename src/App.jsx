import { Box, ThemeProvider } from "@mui/material";
import Navbar from "./Components/Navbar";
import theme from "./Styles/theme";
import styles from "./Styles/styles";

const App = ()  => {
  return (
        <>
        <ThemeProvider theme={theme}>
        <Box sx={styles.window}>
        <Navbar/>
        {/* <h1>Welcome to the world of React</h1> */}
        </Box>
        </ThemeProvider>
        </>
  );
}

export default App;
