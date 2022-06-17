import './categories.scss';
import { Routes, Route} from 'react-router-dom'

import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Authentication from './pages/Authentication/Authentication';
import Shop from './pages/Shop/Shop';
import CheckOut from './pages/CheckOut/CheckOut';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <NavBar />}>
        <Route index element={ <Home />} />
        <Route path="shop" element={ <Shop />} />
        <Route path="auth" element={ <Authentication />} />
        <Route path="checkout" element={ <CheckOut /> } />
      </Route>
    </Routes>
  );
}

export default App;
