import React, { useContext } from 'react';
import "./CartDropDown.scss"

import Button from '../Button/Button'

import { CartContext } from '../../context/cart.context';

import CartItem from '../CartItem/CartItem';

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext)
    console.log(cartItems)

    return (
        <div className='cartDropdown-container'>
            <div className="cartDropdown-items">
                {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
            </div>
            <Button>Go to checkout</Button>
        </div>
    );
};

export default CartDropDown;