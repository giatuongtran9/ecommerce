import { createContext, useState, useEffect } from 'react'
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'

const defaultValue = {
    currentUser: null,
    setCurrentUser: () => null
}

export const UserContext = createContext(defaultValue)

export const UserContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }


    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {

            // if sign in
            if (user) {
                createUserDocumentFromAuth(user)
            }

            setCurrentUser(user);
          });
      
          return unsubscribe;
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}