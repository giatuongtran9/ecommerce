import { compose, createStore, applyMiddleware } from 'redux'
import {persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

import { rootReducer } from './root-reducer'

// const loggerMiddleware = (store) => (next) => (action) => {
//     if (!action.type) {
//         return next(action);
//     }

//     console.log('type', action.type);
//     console.log('payload', action.payload)
//     console.log('currentState', store.getState())

//     next(action)

//     console.log('next state: ', store.getState())
// }

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean)

const composeEnhancer = (process.env.NODE_ENV === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
const composeEnhancers = composeEnhancer(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer, undefined, composeEnhancers)

export const persistor = persistStore(store)

// action dispatch => middleware => next function called => selector fire => trigger re render
/*
CATEGORY COMPONENT
render component
selector fire
useEffect fire call setProducts
logger with currentState
selector fire
re render component
nextState call
*/