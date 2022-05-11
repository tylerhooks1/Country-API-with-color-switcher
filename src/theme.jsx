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
    lightMode: {
      text: "hsla(200, 15%, 8%, 1)",
      input: "hsl(0, 0%, 52%)",
      element: "hsla(0, 0%, 100%, 1)",
      background: "#F2F2F2",
    },
    darkMode: {
      text: "hsla(0, 0%, 100%, 1)",
      input: "hsl(0, 0%, 100%)",
      element: "hsl(209, 23%, 22%)",
      background: "hsl(207, 26%, 17%)",
    },
  },
});

export default theme;
