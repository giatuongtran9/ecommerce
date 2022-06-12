import { Outlet, Link } from 'react-router-dom';
import "./NavBar.scss"

const NavBar = () => {
  return (
    <>
      <div className='navbar'>
        <Link className='logo-container' to='/'>
          <h1>Logo</h1>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/signin'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;