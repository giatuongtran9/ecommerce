import { Outlet, Link } from 'react-router-dom';
import "./NavBar.scss"
import { useContext } from 'react';

import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import Cart from '../Cart/Cart';
import CartDropDown from '../CartDropDown/CartDropDown';

import { Instagram } from '@mui/icons-material';

const NavBar = () => {

  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <>
      <div className='navbar'>
        <Link className='logo-container' to='/'>
          <Instagram />
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
          <Cart />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;