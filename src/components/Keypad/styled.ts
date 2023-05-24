import { styled } from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  background-color: ${({ theme }) => theme.dark.bg[900]};
  border-radius: 10px;
  grid-template-areas:
    "num-7 num-8 num-9 del"
    "num-4 num-5 num-6 plus"
    "num-1 num-2 num-3 minus"
    "point num-0 devide multiply"
    "reset reset equal equal";
`;
