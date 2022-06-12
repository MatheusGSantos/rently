import styled, { keyframes } from 'styled-components';
import bgImg from '../../assets/triangle_pattern.jpg';

export const Container = styled.div`
  width: calc(100% + 4rem);
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: url(${bgImg});
`;

const fadeIn = keyframes`
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
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

    animation: ${fadeIn} 1s;

    button {
      margin: 1rem 0;
    }
  }
`;

export const FormHeader = styled.div`
  width: 100%;
  max-width: 375px;
  margin-bottom: 3rem;
  animation: ${fadeIn} 1s;
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

  animation: ${fadeIn} 1s;
  a {
    margin-left: 0.5rem;
    color: #4b3387;
    text-decoration: none;
    font-weight: 500;
  }
`;
