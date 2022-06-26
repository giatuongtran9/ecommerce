import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
// import { UserContextProvider } from './context/user.context';
// import { CategoriesContextProvider } from './context/caterogies.context';
// import { CartContextProvider } from './context/cart.context';

import { Provider } from 'react-redux'
import { store, persistor } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate  persistor={persistor}>
        <BrowserRouter>
          {/* <UserContextProvider> */}
            {/* <CategoriesContextProvider> */}
              {/* <CartContextProvider> */}
                <App />
              {/* </CartContextProvider> */}
            {/* </CategoriesContextProvider> */}
          {/* </UserContextProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

