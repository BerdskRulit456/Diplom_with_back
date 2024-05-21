import React, { useState } from 'react';
import './Header.css'; 
import header_logo from '../Assets/Header_icon/header_logo.png';
import acc_icon from '../Assets/Header_icon/acc-vrf.png';
import MenuForAcc from '../MenuForAcc/MenuForAcc';

const Header = ({ isLoggedIn }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <div className="header-container">
            <div className="logo">
                <img src={header_logo} alt="Header Logo" />
            </div>
            <nav>
                <ul className="nav-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
            </nav>
            <div className="btn-container">
                {isLoggedIn === false ? (
                    <a href="/LoginSignup" className="register-button">Sign Up / Log In</a>
                ) : (
                    <div className="profile-menu-container">
                        <button onClick={toggleMenu} className='myProfile'>
                            <img src={acc_icon} alt="Account Icon" />
                        </button>
                        {isMenuVisible && <MenuForAcc />}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
