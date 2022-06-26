import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { CartDropDownContainer, EmptyMessage, CartDropDownItems } from "./CartDropDown.style.jsx"
import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button'

// import { CartContext } from '../../context/cart.context';
import { selectCartItems } from '../../store/cart/cart.selector.js';

import CartItem from '../CartItem/CartItem';


const CartDropDown = () => {
    // const { cartItems } = useContext(CartContext)
    const cartItems = useSelector(selectCartItems)

    const navigate = useNavigate()

    const handleCheckOutLink = () => {
        navigate("/checkout")
    }

    return (
        <CartDropDownContainer>
            <CartDropDownItems>
                {cartItems.length ? (cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))) : <EmptyMessage>Your cart is empty</EmptyMessage> }
            </CartDropDownItems>
            <Button onClick={handleCheckOutLink}>Go to checkout</Button>
        </CartDropDownContainer>
    );
};

export default CartDropDown;