import React, { useState, useEffect } from 'react';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Welcome from './Components/Welcome/Welcome'
import ReactBasicPage from './Components/ReactBasicPage/ReactBasicPage';
import ProfileEdit from './Components/ProfileEdit/ProfileEdit';
import FirstPage from './Components/ReactBasicPage/FirstPage/FirstPage';
import CreateReactTheory from './Components/ReactBasicPage/SecondModule/CreateReactTheory/CreateReactTheory'
import Task1 from './Components/ReactBasicPage/SecondModule/CreateReactPractic/Task1/Task1'
import Task2 from './Components/ReactBasicPage/SecondModule/CreateReactPractic/Task2/Task2'
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
        <Route path='/React Basics' element={<ReactBasicPage isLoggedIn = {isLoggedIn}/>} />
        <Route path='/React Basics/FirstPage' element={<FirstPage/>} />
        <Route path='/React Basics/SecondModule/Theory' element={<CreateReactTheory/>} />
        <Route path='/React Basics/SecondModule/Practic/Task1' element={<Task1/>} />
        <Route path='/React Basics/SecondModule/Practic/Task2' element={<Task2/>} />
      </Routes>
    </Router>
  );
}

export default App;
