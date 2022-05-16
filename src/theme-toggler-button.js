import { ThemeContext, themes } from "./theme-context";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

function ThemeTogglerButton() {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context\

  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <IconButton onClick={toggleTheme} disableRipple>
          <DarkModeOutlinedIcon />
          Dark Mode
        </IconButton>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
