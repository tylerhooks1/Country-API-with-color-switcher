import { createTheme } from "@mui/material/styles";
import "@fontsource/nunito-sans";

let theme = createTheme({
  typography: {
    fontFamily: ["Nunito Sans", "sans-serif"].join(","),
  },
  palette: {
    white: " hsl(0, 0%, 100%)",
    lightMode: {
      input: "hsl(0, 0%, 52%)",
      background: "hsl(0, 0%, 98%)",
    },
    darkMode: {
      elements: "hsl(209, 23%, 22%)",
      background: " hsl(207, 26%, 17%)",
      text: "hsl(200, 15%, 8%)",
    },
  },
});

export default theme;
