import React from 'react';
import { useSelector } from 'react-redux';
import "./CheckOut.scss"

// import { CartContext } from '../../context/cart.context'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import CheckOutItem from '../../components/CheckOutItem/CheckOutItem';

const CheckOut = () => {
    // const { cartItems, total } = useContext(CartContext)
    const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectCartTotal)

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