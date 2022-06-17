import React, { useContext } from 'react';
import "./CartDropDown.scss"
import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button'

import { CartContext } from '../../context/cart.context';

import CartItem from '../CartItem/CartItem';

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext)
    console.log(cartItems)

    const navigate = useNavigate()

    const handleCheckOutLink = () => {
        navigate("/checkout")
    }

    return (
        <div className='cartDropdown-container'>
            <div className="cartDropdown-items">
                {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
            </div>
            <Button onClick={handleCheckOutLink}>Go to checkout</Button>
        </div>
    );
};

export default CartDropDown;