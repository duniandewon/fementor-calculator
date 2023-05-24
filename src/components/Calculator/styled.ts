import { styled } from "styled-components";

interface Props {
  currenttheme: string;
}

export const Container = styled.div<Props>`
  padding: 1rem 2rem;
  display: grid;
  gap: 1.5rem;
  max-width: 624px;
  margin: 0 auto;
  color: ${({ theme, currenttheme }) =>
    currenttheme === "dark"
      ? theme[currenttheme].text[100]
      : theme[currenttheme].text[800]};
`;

export const Logo = styled.p`
  font-size: 3rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
