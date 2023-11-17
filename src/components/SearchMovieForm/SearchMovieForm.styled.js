import styled from 'styled-components';

export const StyledForm = styled.form`
  /* padding: 8px; */
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 420px;
`;

export const StyledInput = styled.input`
  padding: 8px;
  width: 240px;
  background-color: transparent;
  &:hover,
  &:focus,
  &:active {
    border-color: #f5a142;
  }
`;

export const StyledBtn = styled.button`
  padding: 8px;
  width: 240px;
  background-color: transparent;
  border: 1px solid black;
  &:hover,
  &:focus,
  &:active {
    border-color: #f5a142;
  }
`;
