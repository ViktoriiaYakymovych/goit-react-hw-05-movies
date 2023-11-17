import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieUl = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Link = styled(NavLink)`
  &:hover {
    color: #f5a142;
  }
`;
