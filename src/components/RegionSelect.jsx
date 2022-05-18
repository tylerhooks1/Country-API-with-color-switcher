import React from "react";
import { ThemeContext } from "../theme-context";
import { useInput } from "@mui/base/InputUnstyled";

function RegionSelect() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => <div>SearchBar</div>}
    </ThemeContext.Consumer>
  );
}

export default RegionSelect;
