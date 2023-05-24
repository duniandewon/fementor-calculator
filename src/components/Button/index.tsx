import styled from "styled-components";

interface Props {
  readonly primary?: boolean;
  readonly danger?: boolean;
  gridArea: string;
}

const Button = styled.button<Props>`
  grid-area: ${(props) => props.gridArea};

  background-color: ${({ theme, primary, danger }) =>
    danger
      ? theme.dark.key[400]
      : primary
      ? theme.dark.key[600]
      : theme.dark.key[200]};

  border: 0;
  cursor: pointer;
  border-radius: 10px;

  color: ${({ theme, primary, danger }) =>
    primary || danger ? theme.dark.text[100] : theme.dark.text[800]};

  text-transform: uppercase;

  box-shadow: 0px 4px 2px 0px
    ${({ theme, primary, danger }) =>
      danger
        ? theme.dark.key[500]
        : primary
        ? theme.dark.key[700]
        : theme.dark.key[300]};

  &:active {
    transform: scale(0.92);
    box-shadow: 0px 2px 2px 0px
      ${({ theme, primary, danger }) =>
        danger
          ? theme.dark.key[500]
          : primary
          ? theme.dark.key[700]
          : theme.dark.key[300]};
  }
`;

export default Button;
