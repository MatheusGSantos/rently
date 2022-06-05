import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../components/Navbar';
import { Container, Content } from './styles';

const Wrapper: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <Outlet />
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Slide}
          style={{ marginTop: '5rem' }}
        />
      </Content>
    </Container>
  );
};

export default Wrapper;
