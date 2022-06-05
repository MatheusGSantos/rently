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
import { useAuth } from '../../hooks/auth';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <NavbarContainer>
      <NavbarLogo src={logoImg} onClick={() => navigate('/')} alt="rently" />
      <NavbarMenu>
        {user && (
          <>
            <NavbarMenuItem to="/my-adds">My Ads</NavbarMenuItem>
            <NavbarMenuItem to="/rents">Rents</NavbarMenuItem>
          </>
        )}
        <NavbarMenuLoginSignUpContainer>
          <NavbarMenuItem to="/login">Login</NavbarMenuItem>
          <NavbarMenuItem to="/signup" $background>
            Sign Up
          </NavbarMenuItem>
        </NavbarMenuLoginSignUpContainer>
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default Navbar;
