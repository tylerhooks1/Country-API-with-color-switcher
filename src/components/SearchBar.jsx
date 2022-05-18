import InputUnstyled from "@mui/base/InputUnstyled";
import styled from "styled-components";
import { ThemeContext } from "../theme-context";

function SearchBar() {
  const StyledInput = styled.input`
    border: 0;
    border-radius: 8px;
    line-height: 1.5;
    margin: 20px 0 20px 0;
    padding: 12px 12px;
    align-self: center;
    width: 40%;
    @media (max-width: 400px) {
      width: 70%;
    }
  `;

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <StyledInput
          style={{
            backgroundColor: theme.componentBG,
          }}
          sx={{
            ":: placeholder": { color: theme.text },
          }}
          placeholder="Search for a country..."
        />
      )}
    </ThemeContext.Consumer>
  );
}

export default SearchBar;
