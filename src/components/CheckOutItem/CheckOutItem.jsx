import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./CheckOutItem.scss"

// import { CartContext } from '../../context/cart.context';
import { selectCartItems } from '../../store/cart/cart.selector';

import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

import { ArrowBack, ArrowForward, Clear } from '@mui/icons-material'

const CheckOutItem = ({ cartItem }) => {
    const { name, quantity, price, imageUrl } = cartItem
    // const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext)
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const addItem = () => dispatch(addItemToCart(cartItems, cartItem))
    const removeItem = () => dispatch(removeItemFromCart(cartItems, cartItem))
    const clearItem = () => dispatch(clearItemFromCart(cartItems, cartItem))

    return (
        <div className="checkoutItem-container">
            <div className="checkoutItem-image">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="checkoutItem-name">{name}</span>
            <span className="checkoutItem-quantity">
                <div className="arrow-left" onClick={removeItem}><ArrowBack /></div>
                <span className="count">{quantity}</span>
                <div className="arrow-right" onClick={addItem}><ArrowForward /></div>
            </span>
            <span className="checkoutItem-price">{price}</span>
            <div className="checkoutItem-remove" onClick={clearItem}><Clear /></div>
        </div>
    );
};

export default CheckOutItem;