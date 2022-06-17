import { createContext, useState, useEffect } from "react";

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
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    itemCount: 0,
    total: 0
}

export const CartContext = createContext(defaultValue)

export const CartContextProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [itemCount, setItemCount] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const count = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setItemCount(count)
    }, [cartItems])

    useEffect(() => {
        const sum = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setTotal(sum)
    }, [cartItems])

    const addItemToCart = (product) => {
        setCartItems(addItem(cartItems, product))
    }

    const removeItemFromCart = (product) => {
        setCartItems(removeItem(cartItems, product))
    }

    const clearItemFromCart = (product) => {
        setCartItems(clearItem(cartItems, product))
    }

    // const count = totalItem(cartItems)

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, itemCount, total,}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}