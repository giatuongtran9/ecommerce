import { createContext, useState, useEffect, useReducer } from "react";

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


// const totalItem = (cartItems) => {
//     let count = 0;

//     cartItems.map((cartItem) => count = count + cartItem.quantity)

//     return count
// }

const defaultValue = {
    isOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    itemCount: 0,
    total: 0
}

export const CartContext = createContext(defaultValue)

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    TOGGLE_CART: 'TOGGLE_CART'
}

const INITIAL_VALUE = {
    isCartOpen: false,
    cartItems: [],
    itemCount: 0,
    total: 0
}

const cartReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }

        case CART_ACTION_TYPES.TOGGLE_CART:
            return {
                ...state,
                isCartOpen: payload
            }

        default:
            throw new Error(`Unhandled tyoe ${type} in cartReducer`)
    }
}

export const CartContextProvider = ({ children }) => {
    // const [isCartOpen, setIsCartOpen] = useState(false)
    // const [cartItems, setCartItems] = useState([])
    // const [itemCount, setItemCount] = useState(0)
    // const [total, setTotal] = useState(0)

    // useEffect(() => {
    //     const count = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    //     setItemCount(count)
    // }, [cartItems])

    // useEffect(() => {
    //     const sum = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    //     setTotal(sum)
    // }, [cartItems])

    const [state, dispatch] = useReducer(cartReducer, INITIAL_VALUE)

    const { cartItems, isCartOpen, itemCount, total } = state

    const updateCartItemsReducer = newCartItems => {
        const count = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        const sum = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
  
        dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: { cartItems: newCartItems, itemCount: count, total: sum}})
    }

    const addItemToCart = (product) => {
        const newCartItems = addItem(cartItems, product)
        updateCartItemsReducer(newCartItems)
    }

    const removeItemFromCart = (product) => {
        const newCartItems = removeItem(cartItems, product)
        updateCartItemsReducer(newCartItems)
    }

    const clearItemFromCart = (product) => {
        const newCartItems = clearItem(cartItems, product)
        updateCartItemsReducer(newCartItems)
    }


    const setIsCartOpen = (bool) => {
        dispatch({ type: CART_ACTION_TYPES.TOGGLE_CART, payload: bool})
    }

    // const count = totalItem(cartItems)

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, itemCount, total}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}