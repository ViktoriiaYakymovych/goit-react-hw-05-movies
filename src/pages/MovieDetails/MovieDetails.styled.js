import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieDetailsSection = styled.section`
  padding: 16px;
`;

export const Link = styled(NavLink)`
  margin-bottom: 16px;
  padding: 8px;
  display: flex;
  gap: 4px;
  align-items: center;
  max-width: 240px;

  &:hover,
  &:focus {
    color: #f5a142;
  }
`;
