import { ThemeProvider } from "styled-components";

import theme from "./theme";

import Calculator from "./components/Calculator";
import ThemeContextProvide from "./context/themeContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ThemeContextProvide>
        <Calculator />
      </ThemeContextProvide>
    </ThemeProvider>
  );
}

export default App;
