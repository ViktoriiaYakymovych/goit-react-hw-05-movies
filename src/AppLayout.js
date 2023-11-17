import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HeaderNav from 'components/HeaderNav/HeaderNav';
import Loader from 'components/Loader/Loader';

const AppLayout = () => {
  return (
    <>
      <HeaderNav />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Toaster />
      </main>
    </>
  );
};

export default AppLayout;
