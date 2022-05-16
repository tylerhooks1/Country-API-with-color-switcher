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
          {theme === themes.dark ? (
            <DarkModeIcon
              sx={{
                fontSize: "16px",
                marginRight: "8px",
                color: theme.text,
              }}
            />
          ) : (
            <DarkModeOutlinedIcon
              sx={{
                fontSize: "16px",
                marginRight: "8px",
                color: theme.text,
              }}
            />
          )}
          <span
            style={{
              fontSize: "14px",
              color: theme.text,
              margin: "0",
            }}
          >
            Dark Mode
          </span>
        </IconButton>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
