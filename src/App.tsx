import { ThemeProvider } from "styled-components";

import theme from "./theme";

import Calculator from "./components/Calculator";
import ThemeContextProvide from "./context/themeContext";
import { CalculatorContextProvider } from "./context/calculatorContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CalculatorContextProvider>
        <ThemeContextProvide>
          <Calculator />
        </ThemeContextProvide>
      </CalculatorContextProvider>
    </ThemeProvider>
  );
}

export default App;
