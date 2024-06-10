import React, { useState, useEffect } from 'react';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Welcome from './Components/Welcome/Welcome';
import ReactBasicPage from './Components/ReactBasicPage/ReactBasicPage';
import ProfileEdit from './Components/ProfileEdit/ProfileEdit';
import FirstPage from './Components/ReactBasicPage/FirstPage/FirstPage';
import CreateReactTheory from './Components/ReactBasicPage/SecondModule/CreateReactTheory/CreateReactTheory';
import CreateReactTheory2 from './Components/ReactBasicPage/SecondModule/CreateReactTheory/CreateReactTheory2/CreateReactTheory2';
import CreateReactTheory3 from './Components/ReactBasicPage/SecondModule/CreateReactTheory/CreateReactTheory3/CreateReactTheory3';
import FunctionalComponentsTheory1 from './Components/ReactBasicPage/SecondModule/FunctionalComponentsTheory/FunctionalComponentsTheory1';
import Task1 from './Components/ReactBasicPage/SecondModule/CreateReactPractic/Task1/Task1';
import Task2 from './Components/ReactBasicPage/SecondModule/CreateReactPractic/Task2/Task2';
import Task3 from './Components/ReactBasicPage/SecondModule/CreateReactPractic/Task3/Task3';
import Task4 from './Components/ReactBasicPage/SecondModule/CreateReactPractic/Task4/Task4';
import Task5 from './Components/ReactBasicPage/SecondModule/CreateReactPractic/Task5/Task5';
import Task6 from './Components/ReactBasicPage/SecondModule/CreateReactPractic/Task6/Task6';
import Task7 from './Components/ReactBasicPage/SecondModule/CreateReactPractic/Task7/Task7';
import Task8 from './Components/ReactBasicPage/SecondModule/CreateReactPractic/Task8/Task8';
import Task9 from './Components/ReactBasicPage/SecondModule/CreateReactPractic/Task9/Task9';
import Task10 from './Components/ReactBasicPage/SecondModule/CreateReactPractic/Task10/Task10';
import FinalPage from './Components/ReactBasicPage/FinalPage/FinalPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './Components/Chat/Chat';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [scoreOfStudent, setScoreOfStudent] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const updateScore = (assignmentId, score) => {
    setScoreOfStudent(prevScores => {
      const existingScore = prevScores.find(score => score.assignmentId === assignmentId);
      if (existingScore) {
        return prevScores.map(score => 
          score.assignmentId === assignmentId ? { ...score, score } : score
        );
      } else {
        return [...prevScores, { assignmentId, score }];
      }
    });
  };

  console.log("Current scores:", scoreOfStudent);

  return (
    <Router>
      <Routes>
        <Route path='/LoginSignup' element={<LoginSignup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/' element={<Welcome isLoggedIn={isLoggedIn} />} />
        <Route path='/React Basics' element={<ReactBasicPage isLoggedIn={isLoggedIn} />} />
        <Route path='/React Basics/FirstPage' element={<FirstPage />} />
        <Route path='/Chat' element={<Chat />} />
        <Route path='/React Basics/SecondModule/Theory' element={<CreateReactTheory />} />
        <Route path='/React Basics/SecondModule/Theory/CreateReactTheory' element={<CreateReactTheory2 />} />
        <Route path='/React Basics/SecondModule/Theory/CreateReactTheory3' element={<CreateReactTheory3 />} />
        <Route path='/React Basics/SecondModule/Theory/FunctionalComponentsTheory1' element={<FunctionalComponentsTheory1 />} />
        <Route path='/React Basics/SecondModule/Practic/Task1' element={<Task1 updateScore={updateScore} />} />
        <Route path='/React Basics/SecondModule/Practic/Task2' element={<Task2 updateScore={updateScore} />} />
        <Route path='/React Basics/SecondModule/Practic/Task3' element={<Task3 updateScore={updateScore} />} />
        <Route path='/React Basics/SecondModule/Practic/Task4' element={<Task4 updateScore={updateScore} />} />
        <Route path='/React Basics/SecondModule/Practic/Task5' element={<Task5 updateScore={updateScore} />} />
        <Route path='/React Basics/SecondModule/Practic/Task6' element={<Task6 updateScore={updateScore} />} />
        <Route path='/React Basics/SecondModule/Practic/Task7' element={<Task7 updateScore={updateScore} />} />
        <Route path='/React Basics/SecondModule/Practic/Task8' element={<Task8 updateScore={updateScore} />} />
        <Route path='/React Basics/SecondModule/Practic/Task9' element={<Task9 updateScore={updateScore} />} />
        <Route path='/React Basics/SecondModule/Practic/Task10' element={<Task10 updateScore={updateScore} />} />
        <Route path='/React Basics/Thrid/FinalPage' element={<FinalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
