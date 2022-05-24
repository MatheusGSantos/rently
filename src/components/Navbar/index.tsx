import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  NavbarContainer,
  NavbarLogo,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuLoginSignUpContainer,
} from './styles';
import logoImg from '../../assets/Logo.png';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <NavbarLogo src={logoImg} onClick={() => navigate('/')} alt="rently" />
      <NavbarMenu>
        <NavbarMenuItem to="#">My Ads</NavbarMenuItem>
        <NavbarMenuItem to="#">Rents</NavbarMenuItem>
        <NavbarMenuLoginSignUpContainer>
          <NavbarMenuItem to="#">Login</NavbarMenuItem>
          <NavbarMenuItem to="#" button>
            Sign Up
          </NavbarMenuItem>
        </NavbarMenuLoginSignUpContainer>
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default Navbar;