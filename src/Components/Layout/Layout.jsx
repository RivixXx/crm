import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import LeftBar from '../LeftBar/LeftBar';

export const Layout = () => {
  return (
    <>
        <LeftBar />
        <Outlet />
        <Footer />
    </>
  )
}
