import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const NavbarOnlyLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default NavbarOnlyLayout;
