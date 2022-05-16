import React from "react";
import styled from "styled-components";
import { Container } from "@mui/material";
import { IconButton } from "@mui/material";
import { ThemeContext } from "../theme-context";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const StyledHeader = styled.div`
  display: flex;
`;

function Header() {
  // const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <StyledHeader>
          <Container>
            <h5 style={{ color: theme.text }}>Where in the World</h5>
            <IconButton></IconButton>
          </Container>
        </StyledHeader>
      )}
    </ThemeContext.Consumer>
  );
}

export default Header;
