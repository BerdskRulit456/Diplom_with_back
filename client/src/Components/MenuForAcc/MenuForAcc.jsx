import React, { useState } from 'react';
import './MenuForAcc.css';
import ProfileEdit from '../ProfileEdit/ProfileEdit';

const MenuForAcc = ({isLoggedIn}) => {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const unLoggedIn = () => {
        isLoggedIn = false
        localStorage.removeItem('token');
        localStorage.removeItem('_id');
        console.log("1")
    }
    const closeEdit = () =>{ setIsEditOpen(false) }
    const isOpen = () =>{ 
        setIsEditOpen(true)
        console.log(true)
    }
    return (
        <div className="MenuForAcc">
            <div className="popup-menu">
                <ul>
                    <li><a onClick={isOpen}>Edit</a></li>
                    <li><a href="/" onClick={unLoggedIn}>LogOut</a></li>
                    <li><a href="/Chat">My chats</a></li>
                </ul>
            </div>
            <ProfileEdit isOpen = {isEditOpen} isClose = {closeEdit}/>
        </div>
    );
};

export default MenuForAcc;
