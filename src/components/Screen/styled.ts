import { styled } from "styled-components";

interface Props {
  currenttheme: string;
}

export const Container = styled.aside<Props>`
  background-color: ${({ theme, currenttheme }) => theme[currenttheme].bg[800]};
  padding: 1rem 2rem;
  border-radius: 10px;
  text-align: right;
  color: ${({ theme, currenttheme }) =>
    currenttheme === "dark"
      ? theme[currenttheme].text[100]
      : theme[currenttheme].text[800]};
`;
