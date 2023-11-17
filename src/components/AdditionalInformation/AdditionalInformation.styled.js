import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AdditionalSection = styled.section`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid black;
`;

export const AdditionalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Link = styled(NavLink)`
  &:hover,
  &:focus {
    color: #f5a142;
  }
`;
