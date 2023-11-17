import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 16px;
  box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.13), 0 1px 4px 0 rgba(0, 0, 0, 0.11);
`;

export const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Link = styled(NavLink)`
  &.active {
    color: #f5a142;
  }
`;
