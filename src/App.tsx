import { ThemeProvider } from "styled-components";

import theme from "./theme";

import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
