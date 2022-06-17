import React, { useContext } from 'react';
import "./Cart.scss"

import { CartContext } from '../../context/cart.context';

import { ShoppingBag } from '@mui/icons-material'

const Cart = () => {

    const { itemCount, isCartOpen, setIsCartOpen } = useContext(CartContext)

    const toggleCartDropDown = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <div className='cart-container' onClick={toggleCartDropDown}>
            <ShoppingBag className='cart-icon'/>
            <span className='cart-itemCount'>{itemCount}</span>
        </div>
    );
};

export default Cart;