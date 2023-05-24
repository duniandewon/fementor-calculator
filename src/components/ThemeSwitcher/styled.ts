import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;

  & > p {
    align-self: flex-end;
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-right: 2rem;
  }
`;

export const Swithcer = styled.div``;

export const Label = styled.label`
  cursor: pointer;
  font-size: 1rem;
`;

const KeysAndLabels = styled.div`
  width: 7rem;
  display: flex;
  justify-content: space-between;
`;

export const Labels = styled(KeysAndLabels)`
  padding: 0 1rem;
`;

export const Keys = styled(KeysAndLabels)`
  grid-column: span 3;
  background-color: ${({theme}) => theme.dark.bg[900]};
  border-radius: 20px;
  padding: 0.4rem;
`;

export const Key = styled.input`
  appearance: none;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  cursor: pointer;

  &:checked {
    background-color: ${({theme}) => theme.dark.key[400]};
    outline: 1px solid ${({theme}) => theme.dark.key[500]};
  }
`;
