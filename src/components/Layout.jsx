import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = () => {
  const location = useLocation();
  const hideLayoutRoutes = ['/login', '/signup'];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!shouldHideLayout && <Navbar />}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
      {!shouldHideLayout && <Footer />}
    </div>
  );
};

export default Layout;
