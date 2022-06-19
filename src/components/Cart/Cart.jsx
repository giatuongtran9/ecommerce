import React, { useContext } from 'react';
import { CartContainer, CartIcon, CartItemCount} from "./Cart.style.jsx"

import { CartContext } from '../../context/cart.context';

const Cart = () => {

    const { itemCount, isCartOpen, setIsCartOpen } = useContext(CartContext)

    const toggleCartDropDown = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <CartContainer onClick={toggleCartDropDown}>
            <CartIcon className='override'/>
            <CartItemCount>{itemCount}</CartItemCount>
        </CartContainer>
    );
};

export default Cart;