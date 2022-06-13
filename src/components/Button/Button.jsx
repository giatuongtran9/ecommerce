import React from 'react';
import "./Button.scss"

const BUTTON_TYPE = {
    google: 'google-signin',
    inverted: 'inverted'
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button className={`button-container ${BUTTON_TYPE[buttonType]}`} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;