import React from "react";
import { Container, useTheme } from "@mui/material";
import DarkModeButton from "./DarkModeButton";
import theme from "../theme";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        dropShadow: " hsla(0, 0%, 0%, 0.06)",
      }}
    >
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5 variant={theme.typography.fontWeightMedium}>
            Where in the world?
          </h5>
          <DarkModeButton />
        </div>
      </Container>
    </div>
  );
};

export default Header;
