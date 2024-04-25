import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Welcome from './Components/Welcome/Welcome'
import ReactBasicPage from './Components/ReactBasicPage/ReactBasicPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/LoginSignup' element={<LoginSignup />} />
        <Route path='/' element={<Welcome />} />
        <Route path='/React Basics' element={<ReactBasicPage />} />
      </Routes>
    </Router>
  );
}

export default App;
