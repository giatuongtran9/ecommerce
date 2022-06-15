import { createContext, useState } from "react";

import PRODUCTS from '..//shop-data.json'

const defaultValue = {
    products: [],
    
}

export const ProductContext = createContext(defaultValue);

export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS)
    const value = { products }
    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}