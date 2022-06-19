import React from 'react';
import {BaseButton, GoogleSignInButton, InvertedButton} from "./Button.style.jsx"

export const BUTTON_TYPE = {
    base: 'base',
    google: 'google-signin',
    inverted: 'inverted'
}

const getButton = (type = BUTTON_TYPE.base) => ({
        [BUTTON_TYPE.base]: BaseButton,
        [BUTTON_TYPE.google]: GoogleSignInButton,
        [BUTTON_TYPE.inverted]: InvertedButton
    }[type]);


const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType)

    return (
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>
    );
};

export default Button;