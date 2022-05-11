import { createTheme } from "@mui/material/styles";
import "@fontsource/nunito-sans/300.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/800.css";

let theme = createTheme({
  typography: {
    fontFamily: ["Nunito Sans", "sans-serif"].join(","),
    fontWeightRegular: 300,
    fontWeightMedium: 600,
    fontWeightBold: 800,
  },
  palette: {
    white: " hsl(0, 0%, 100%)",
    text: "#111517",
    lightMode: {
      input: "hsl(0, 0%, 52%)",
      background: "hsl(0, 0%, 98%)",
    },
    darkMode: {
      elements: "hsl(209, 23%, 22%)",
      background: " hsl(207, 26%, 17%)",
    },
  },
});

export default theme;
