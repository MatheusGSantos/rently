import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 2px solid #ccc;
  cursor: pointer;
  display: flex;
  padding: 1.5rem;
  transition: border-color 0.1s ease-in-out;

  &:hover {
    border-color: #8d75cd;
  }

  p {
    color: #666568;
    display: flex;
    align-items: center;
  }

  #card-body {
    flex: 1;
    padding-left: 1rem;
  }
  #card-body-footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #seller-container {
    display: flex;
    align-items: center;
    p {
      margin-right: 1rem;
    }
  }
`;
