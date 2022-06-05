import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 600px;
  height: 80%;
  min-height: 500px;
  background-color: #fff;
  box-shadow: 4px 4px 8px 1px rgb(0 0 0 / 20%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 2rem;

  form {
    width: 100%;
    max-width: 375px;

    button {
      margin: 1rem 0;
    }
  }
`;

export const FormHeader = styled.div`
  width: 100%;
  max-width: 375px;
  margin-bottom: 3rem;
  h1 {
    font-weight: 700;
    font-size: 2.5;
  }

  h3 {
    font-size: 1rem;
    margin-top: 1.25rem;
    color: #bab8bc;
    font-weight: 400;
  }
`;

export const LogInContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #979797;
  a {
    margin-left: 0.5rem;
    color: #4b3387;
    text-decoration: none;
    font-weight: 500;
  }
`;
