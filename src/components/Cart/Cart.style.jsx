import styled from 'styled-components'
import { ShoppingBag } from '@mui/icons-material';

export const CartContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const CartIcon = styled(ShoppingBag)`
    &.override {
        width: 40px;
        height: 40px;
    }
`

export const CartItemCount = styled.span`
    position: absolute;
    font-size: 15px;
    color: white;
    bottom: 8px;
`
