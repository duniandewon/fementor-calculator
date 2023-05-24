import styled from "styled-components";

interface Props {
  readonly $primary?: boolean;
  readonly $danger?: boolean;
  gridarea: string;
  currenttheme: string;
}

const Button = styled.button<Props>`
  grid-area: ${(props) => props.gridarea};

  background-color: ${({ theme, $primary, $danger, currenttheme }) =>
    $danger
      ? theme[currenttheme].key[400]
      : $primary
      ? theme[currenttheme].key[600]
      : theme[currenttheme].key[200]};

  border: 0;
  cursor: pointer;
  border-radius: 10px;

  color: ${({ theme, $primary, $danger, currenttheme }) =>
    $primary || $danger
      ? theme[currenttheme].text[100]
      : theme[currenttheme].text[800]};

  text-transform: uppercase;

  box-shadow: 0px 4px 2px 0px
    ${({ theme, $primary, $danger, currenttheme }) =>
      $danger
        ? theme[currenttheme].key[500]
        : $primary
        ? theme[currenttheme].key[700]
        : theme[currenttheme].key[300]};

  &:active {
    transform: scale(0.92);
    box-shadow: 0px 2px 2px 0px
      ${({ theme, $primary, $danger, currenttheme }) =>
        $danger
          ? theme[currenttheme].key[500]
          : $primary
          ? theme[currenttheme].key[700]
          : theme[currenttheme].key[300]};
  }
`;

export default Button;
