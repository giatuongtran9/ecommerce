import { Outlet, Link } from 'react-router-dom';
import "./NavBar.scss"
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const NavBar = () => {

  const { currentUser } = useContext(UserContext)
  console.log(currentUser)



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
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;