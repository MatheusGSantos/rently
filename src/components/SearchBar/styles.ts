import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

interface SearchBarProps {
  isFocused: boolean;
}

export const Container = styled.div<SearchBarProps>`
  width: 100%;
  max-width: 700px;
  padding: 0.8rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s ease-in-out;
  border: 1px solid ${transparentize(0.9, '#000')};
  font-family: 'Poppins', sans-serif;

  border-radius: 23px;
  background-color: #fefdff;

  ${(props) =>
    props.isFocused &&
    css`
      box-shadow: 0px 0px 8px 1px ${transparentize(0.6, '#8d75cd')};
    `}

  input {
    flex: 1;
    outline: none;
    border: none;
    background-color: transparent;

    &::placeholder {
      color: #9498a4;
      font-weight: 400;
    }
  }

  svg {
    margin-left: 0.5rem;
    cursor: pointer;
  }
`;
