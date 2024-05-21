import React from 'react';
import './MenuForAcc.css'; 

const MenuForAcc = () => {
    return (
        <div className="MenuForAcc">
            <div className="popup-menu">
                <ul>
                    <li><a href="/EditMyProfile">Edit</a></li>
                    <li><a href="#option2">LogOut </a></li>
                </ul>
            </div>
        </div>
    );
};

export default MenuForAcc;
