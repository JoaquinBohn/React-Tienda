import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#8a2be2",
      darker: "#6920ad",
    },
    secondary: {
      main: "#35203a",
      darker: "#ffffff",
    },
    neutral: {
      main: "#b29fb6",
      contrastText: "#000000",
    },
    warning: {
      main: "#e64949",
      darker: "#c53d3d",
    },
  },
});

export default theme;
