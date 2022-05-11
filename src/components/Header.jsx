import React, { useState } from "react";
import theme from "../theme";
import DarkModeButton from "./DarkModeButton";

const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h5 variant={theme.typography.fontWeightMedium}>Where in the world?</h5>
      <DarkModeButton />
    </div>
  );
};

export default Header;
