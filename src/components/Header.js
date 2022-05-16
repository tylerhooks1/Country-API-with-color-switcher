import React from "react";
import styled from "styled-components";
import { Container } from "@mui/material";
import ThemeTogglerButton from "../theme-toggler-button";
import { ThemeContext } from "../theme-context";
const StyledHeader = styled.div`
  display: flex;
`;

function Header() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Container>
          <StyledHeader>
            <h5 style={{ color: theme.text }}>Where in the World</h5>
            <ThemeTogglerButton />
          </StyledHeader>
        </Container>
      )}
    </ThemeContext.Consumer>
  );
}

export default Header;
