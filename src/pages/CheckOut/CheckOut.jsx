import React, { useContext } from 'react';
import "./CheckOut.scss"

import { CartContext } from '../../context/cart.context'

import CheckOutItem from '../../components/CheckOutItem/CheckOutItem';

const CheckOut = () => {
    const { cartItems, total } = useContext(CartContext)
    console.log(cartItems)
    return (
        <div className='checkout-container'>
            <div className="checkout-top">
                <div className="checkout-title">
                    <span>Product</span>
                </div>

                <div className="checkout-title">
                    <span>Description</span>
                </div>

                <div className="checkout-title">
                    <span>Quantity</span>
                </div>

                <div className="checkout-title">
                    <span>Price</span>
                </div>

                <div className="checkout-title">
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map((cartItem) => (
                <CheckOutItem key={cartItem.id} cartItem={cartItem} />
            ))}

            <div className="checkout-total">TOTAL: ${total}</div>
        </div>
    );
};

export default CheckOut;