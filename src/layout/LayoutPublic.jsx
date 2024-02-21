import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';

const LayoutPublic = () => {
  return (
    <>
    < Nav />
    < Outlet />

    </>
  )
}

export default LayoutPublic;