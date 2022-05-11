import React from "react";
import { ThemeProvider, Container } from "@mui/material";
import theme from "./theme";
import Header from "./components/Header";

function App() {
  //const [mode, setMode] = useState < PaletteMode > "lightMode";
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
        </div>
      </ThemeProvider>
    </Container>
  );
}

export default App;
