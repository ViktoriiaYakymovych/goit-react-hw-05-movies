import styled from 'styled-components';

export const MovieWrapper = styled.div`
  padding-bottom: 16px;
  margin-bottom: 16px;
  display: flex;
  gap: 16px;
  border-bottom: 1px solid black;
`;

export const Img = styled.img`
  max-width: 560px;
  object-fit: contain;
`;

export const Descriprion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
