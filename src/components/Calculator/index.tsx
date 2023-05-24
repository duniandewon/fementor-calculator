import Keypad from "../Keypad";
import Screen from "../Screen";
import ThemeSwitcher from "../ThemeSwitcher";
import { Container, Header, Logo } from "./styled";

const Calculator = () => {
  return (
    <Container>
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
