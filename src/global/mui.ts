import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: colors.darkPurple,
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: colors.bluecolor,
      contrastText: "#000000",
    },
  },
  typography: {
    fontFamily: '"Manrope", sans-serif',
  },
});

export default theme;
