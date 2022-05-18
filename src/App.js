import React from "react";
import { ThemeContext, themes } from "./theme-context";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Container from "@mui/material/Container";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light, //default
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // The entire state is passed to the provider
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <React.Fragment>
          <div style={{ backgroundColor: theme.componentBG }}>
            <Header />
          </div>
          <div style={{ backgroundColor: theme.background }}>
            <Container>
              <SearchBar />
            </Container>
          </div>
        </React.Fragment>
      )}
    </ThemeContext.Consumer>
  );
}

export default App;
