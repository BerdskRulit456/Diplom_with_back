import React, { useState } from 'react';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Welcome from './Components/Welcome/Welcome'
import ReactBasicPage from './Components/ReactBasicPage/ReactBasicPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path='/LoginSignup' element={<LoginSignup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/' element={<Welcome isLoggedIn = {isLoggedIn}/>} />
        <Route path='/React Basics' element={<ReactBasicPage />} />
      </Routes>
    </Router>
  );
}

export default App;
