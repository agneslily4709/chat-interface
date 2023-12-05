import { createTheme } from "@mui/material/styles";

const theme = createTheme({
        palette: {
          background: {
            default: "#050505", 
            main: "#181818", 
            sub: "#2f2f2f",
            contrast:"#F3AE9F"
          },
          text: {
            black: "#050505", 
            white:"#b9b9b9",
            contrast:"#F3AE9F",
            grey:"#7F8781"
          },
        },
      });
      

export default theme;
