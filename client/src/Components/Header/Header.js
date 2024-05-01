import React from 'react';
import './Header.css'; 
import header_logo from '../Assets/Header_icon/header_logo.png'

const Header = () => {
    
    return (
    <div className="header-container">
        <div className="logo">
            <img src= {header_logo} alt =""></img>
        </div>
        <nav>
        <ul className="nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Contact">Contact</a></li>
        </ul>
        </nav>
        <div className="btn-container">
            <a href="/LoginSignup" className="register-button">Sign Up / Log In</a> 
        </div>
    </div>
    );
};

export default Header;
