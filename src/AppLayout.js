import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Toaster } from 'react-hot-toast';
import HeaderNav from 'components/HeaderNav/HeaderNav';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
  max-width: 1024px;
  margin: 0 auto;
`;

const AppLayout = () => {
  return (
    <Container>
      <HeaderNav />

      <Outlet />
      <Toaster />
    </Container>
  );
};

export default AppLayout;
