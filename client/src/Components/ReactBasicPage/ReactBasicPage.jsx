import React from 'react';
import '../ReactBasicPage/ReactBasicPage.css';

const ReactBasicsPage = ({ isLoggedIn }) => {
    const Linkto = isLoggedIn ? '/React Basics/FirstPage' : '/LoginSignup';
    return (
        <div className="course-container">
            <h1 className="course-title">React Basics</h1>
            <p className="course-description">
                Добро пожаловать на курс "React Basics"! В этом курсе вы узнаете основы
                библиотеки React, включая компоненты, состояния, свойства и жизненный цикл.
            </p>
            <div className="course-outline">
                <h2>Что вы узнаете и чему научитесь:</h2>
                <ul>
                    <li>Что такое React и зачем он нужен</li>
                    <li>Создатите свой первый компонент</li>
                    <li>Узнаете что такое функциональные и классовые компоненты</li>
                    <li>Поработаем с пропсами и состояниями</li>
                    <li>Основы React Hooks</li>
                </ul>
            </div>
            <a href={Linkto} className="enroll-button">Начать прохождение!</a>
        </div>
    );
}

export default ReactBasicsPage;
