import { useCalculator } from "../../hooks/useCalculator";
import { useTheme } from "../../hooks/useTheme";

import { Container } from "./styled";

const Screen = () => {
  const { theme } = useTheme();
  const { num1 } = useCalculator();

  return <Container currenttheme={theme}>{num1}</Container>;
};

export default Screen;
