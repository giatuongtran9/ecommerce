import { Outlet } from 'react-router-dom';
import { NavContainer, LogoContainer, NavLinkContainer, NavLink } from "./NavBar.style.jsx"

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
      <NavContainer>
        <LogoContainer to='/'>
          <Instagram />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
          )}
          <Cart />
        </NavLinkContainer>
        {isCartOpen && <CartDropDown />}
      </NavContainer>
      <Outlet />
    </>
  );
};

export default NavBar;