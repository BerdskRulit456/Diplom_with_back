import React, { useState, useEffect } from 'react';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Welcome from './Components/Welcome/Welcome'
import ReactBasicPage from './Components/ReactBasicPage/ReactBasicPage';
import ProfileEdit from './Components/ProfileEdit/ProfileEdit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route path='/LoginSignup' element={<LoginSignup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/' element={<Welcome isLoggedIn = {isLoggedIn}/>} />
        <Route path='/React Basics' element={<ReactBasicPage />} />
        <Route path='/EditMyProfile' element={<ProfileEdit/>} />
      </Routes>
    </Router>
  );
}

export default App;
