import React from "react";
import { ThemeProvider, Container } from "@mui/material";
import theme from "./theme";
import { useTheme } from "@mui/system";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Container>
          <SearchBar />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
