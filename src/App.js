import './categories.scss';
import { Routes, Route} from 'react-router-dom'

import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Authentication from './pages/Authentication/Authentication';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <NavBar />}>
        <Route index element={ <Home />} />
        <Route path="auth" element={ <Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
