import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: #333;
  text-decoration: none;
  font-size: 25px;
  &.active {
    color: violet;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 25px;
  list-style: none;
  padding-bottom: 25px;
  border-bottom: 2px solid #aaaaaa;
`;