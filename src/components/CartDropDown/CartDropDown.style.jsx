import styled from 'styled-components'

import { BaseButton, GoogleSignInButton, InvertedButton } from '../Button/Button.style'

export const CartDropDownContainer = styled.div`
    position: absolute;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 10;

    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
        margin-top: auto;
    }
`

export const EmptyMessage = styled.span`
    font-size: 20px;
    margin: 50px auto;
`

export const CartDropDownItems = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`
