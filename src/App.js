import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Start of Project</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
