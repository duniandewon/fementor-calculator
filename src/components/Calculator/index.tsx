import { useTheme } from "../../hooks/useTheme";
import GlobalStyle from "../GlobalStyle";
import Keypad from "../Keypad";
import Screen from "../Screen";
import ThemeSwitcher from "../ThemeSwitcher";
import { Container, Header, Logo } from "./styled";

const Calculator = () => {
  const { theme } = useTheme();
  return (
    <Container currenttheme={theme}>
      <GlobalStyle currenttheme={theme} />
      <Header>
        <Logo>calc</Logo>
        <ThemeSwitcher />
      </Header>
      <Screen />
      <Keypad />
    </Container>
  );
};

export default Calculator;
