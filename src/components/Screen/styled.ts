import { styled } from "styled-components";

export const Container = styled.aside`
  background-color: ${({theme}) => theme.dark.bg[800]};
  padding: 1rem 2rem;
  border-radius: 10px;
  text-align: right;
`;
