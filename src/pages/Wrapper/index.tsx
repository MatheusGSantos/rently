import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { Container, Content } from './styles';

const Wrapper: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Wrapper;
