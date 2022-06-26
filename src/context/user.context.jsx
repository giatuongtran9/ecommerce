import { createContext, useEffect, useReducer } from 'react'
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'

const defaultValue = {
    currentUser: null,
    setCurrentUser: () => null
}

export const UserContext = createContext(defaultValue)

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    console.log(action)
    const { type, payload } = action

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled tyoe ${type} in userReducer`)
    }
}

const INITIAL_VALUE = {
    currentUser: null
}

export const UserContextProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(null)

    const [state, dispatch] = useReducer(userReducer, INITIAL_VALUE)

    const { currentUser } = state
    console.log(currentUser)

    const setCurrentUser = user => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
    }

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