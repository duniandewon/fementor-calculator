import { useTheme } from "../../hooks/useTheme";
import { Container } from "./styled";

const Screen = () => {
  const { theme } = useTheme();

  return <Container currenttheme={theme}>0</Container>;
};

export default Screen;
