import React from 'react';
import "./CartItem.scss"

const CartItem = ({ cartItem }) => {
    return (
        <div className='cartItem-container'>
            <img src={cartItem.imageUrl} alt={`${cartItem.name}`}/>
            <div className='cartItem-detail'>
                <span className='cartItem-name'>{cartItem.name}</span>
                <span className='cartItem-price'>{cartItem.quantity} x ${cartItem.price}</span>
            </div>
        </div>
    );
};

export default CartItem;