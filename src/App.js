import './categories.scss';
import { Routes, Route} from 'react-router-dom'

import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import SignIn from './pages/SignIn/SignIn';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <NavBar />}>
        <Route index element={ <Home />} />
        <Route path="/signin" element={ <SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
