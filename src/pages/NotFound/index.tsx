import React from 'react';
import { Container } from './styles';
import NegateIcon from '../../assets/Negate.svg';

const NotFound: React.FC = () => {
  return (
    <Container>
      <h1>Not Found 404</h1>
      <img src={NegateIcon} alt="NotFound" />
      <h3>Seems like this page doesn&apos;t exist.</h3>
    </Container>
  );
};

export default NotFound;
