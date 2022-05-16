import React from "react";

export const themes = {
  light: {
    componentBG: "#FFFF",
    background: "#F2F2F2",
    data: "#B2B2B2",
    text: "#111517",
  },
  dark: {
    componentBG: "#2B3844",
    background: "#202C36",
    data: "#FFFF",
    text: "#FFFF",
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
