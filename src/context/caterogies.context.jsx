import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

const defaultValue = {
    caterogies: {},
    
}

export const CategoriesContext = createContext(defaultValue);

export const CategoriesContextProvider = ({ children }) => {
    const [categories, setCategories] = useState({})
    const value = { categories };

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocuments()
            setCategories(categoriesMap)
        }

        getCategoriesMap()
    }, [])

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}