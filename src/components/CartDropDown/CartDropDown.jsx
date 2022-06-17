import React from 'react';
import "./CartDropDown.scss"

import Button from '../Button/Button'

const CartDropDown = () => {
    return (
        <div className='cartDropdown-container'>
            <div className="cartDropdown-items"></div>
            <Button>Go to checkout</Button>
        </div>
    );
};

export default CartDropDown;