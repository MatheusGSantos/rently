import { shade } from 'polished';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface NavbarMenuItemProps {
  button?: boolean;
}

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  margin-bottom: 1rem;
  /* border-bottom: 1px solid #e6e6e6; */
`;

export const NavbarLogo = styled.img`
  height: 35px;
  cursor: pointer;
`;

export const NavbarMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  a + a {
    margin-left: 2rem;
  }
`;

export const NavbarMenuItem = styled(Link)<NavbarMenuItemProps>`
  color: #000;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: 0.2s all ease-in-out;

  &:hover {
    color: #3700c2;
  }

  ${(props) =>
    props.button &&
    css`
      padding: 0.375rem 1.75rem;
      background-color: #51b651;
      color: #fcfbff;
      border-radius: 27px;
      margin-left: 0.75rem !important;

      &:hover {
        background-color: ${shade(0.2, '#51b651')};
        color: ${shade(0.2, '#fcfbff')};
      }
    `}
`;

export const NavbarMenuLoginSignUpContainer = styled.div`
  margin-left: 8%;
`;
