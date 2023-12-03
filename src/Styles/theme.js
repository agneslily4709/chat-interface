// import { green, purple } from "./colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
        palette: {
          background: {
            default: "#050505", // Background Color
            chatInterface: "#181818", // Chat Interface Background
            chatHeader: "#2f2f2f", // Chat Header Background
          },
          primary: {
            main: "#f3ae9f", // Contrast Color (Button Background and Texts)
          },
          text: {
            primary: "#ffffff", // Texts and Icons Color
          },
        },
      });
      

export default theme;
