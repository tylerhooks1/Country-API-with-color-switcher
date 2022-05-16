import React from "react";
import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";

const StyledInput = styled("input")(
  ({ theme }) => `background: ${theme.componentBG}`
);
function SearchBar() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => <StyledInput />}
    </ThemeContext.Consumer>
  );
}

export default SearchBar;
