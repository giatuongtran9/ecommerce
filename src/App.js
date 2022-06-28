import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route} from 'react-router-dom'

import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils'
import { setCurrentUser } from './store/user/user.action'

import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Authentication from './pages/Authentication/Authentication';
import Shop from './pages/Shop/Shop';
import CheckOut from './pages/CheckOut/CheckOut';

import { GlobalStyle } from './global.styles'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {

        // if sign in
        if (user) {
            createUserDocumentFromAuth(user)
        }

        dispatch(setCurrentUser(user));
      });
  
      return unsubscribe;
  }, [])

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <NavBar />}>
          <Route index element={ <Home />} />
          <Route path="shop/*" element={ <Shop />} />
          <Route path="auth" element={ <Authentication />} />
          <Route path="checkout" element={ <CheckOut /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
