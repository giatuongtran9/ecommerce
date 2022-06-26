import { CART_ACTION_TYPES } from "./cart.types";

const addItem = (cartItems, product) => {
    const exist = cartItems.find((cartItem) => cartItem.id === product.id)

    if (exist) {
        return cartItems.map((cartItem) => cartItem.id === product.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }

    return [...cartItems, {...product, quantity: 1}]
}

const removeItem = (cartItems, product) => {
    const exist = cartItems.find((cartItem) => cartItem.id === product.id)

    if (exist.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== product.id)
    }

    return cartItems.map((cartItem) => (
        cartItem.id === product.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
    ))
}

const clearItem = (cartItems, product) => cartItems.filter((cartItem) => cartItem.id !== product.id)

export const addItemToCart = (cartItems, product) => {
    const newCartItems = addItem(cartItems, product)
    return {type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems}
}

export const removeItemFromCart = (cartItems, product) => {
    const newCartItems = removeItem(cartItems, product)
    return {type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems}
}

export const clearItemFromCart = (cartItems, product) => {
    const newCartItems = clearItem(cartItems, product)
    return {type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems}
}

export const setIsCartOpen = (boolean) => ({ type: CART_ACTION_TYPES.TOGGLE_CART, payload: boolean})