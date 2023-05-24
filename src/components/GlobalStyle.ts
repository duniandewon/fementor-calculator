import { createGlobalStyle } from "styled-components";
interface Props {
  currenttheme: string;
}

const GlobalStyle = createGlobalStyle<Props>`
body {
  background-color: ${({ theme, currenttheme }) => theme[currenttheme].bg[700]};
  font-family: "League Spartan", sans-serif;
  font-size: 2rem;
  line-height: 1.5;
}
`;

export default GlobalStyle;
