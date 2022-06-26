import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartContainer, CartIcon, CartItemCount} from "./Cart.style.jsx"

import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector"
import { setIsCartOpen } from "../../store/cart/cart.action"
// import { CartContext } from '../../context/cart.context';

const Cart = () => {

    const dispatch = useDispatch()
    // const { itemCount, isCartOpen, setIsCartOpen } = useContext(CartContext)
    const itemCount = useSelector(selectCartCount)
    const isCartOpen = useSelector(selectIsCartOpen)

    const toggleCartDropDown = () => {
        dispatch(setIsCartOpen(!isCartOpen))
    }

    return (
        <CartContainer onClick={toggleCartDropDown}>
            <CartIcon className='override'/>
            <CartItemCount>{itemCount}</CartItemCount>
        </CartContainer>
    );
};

export default Cart;