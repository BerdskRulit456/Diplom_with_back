import React, {useState} from "react";
import Modal from 'react-modal';
import telegram_icon from './Icon/telegram_icon.png'
import whatsapp_icon from './Icon/whatsapp_icon.png'
import phone_icon from './Icon/phone_icon.png'
import gmail_icon from './Icon/gmail_icon.png'
import './Contact.css'

Modal.setAppElement('#root');


const Contact = ({isOpen, isClose}) => {
    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={isClose}
        contentLabel="Edit Profile"
        className="Modal"
        overlayClassName="Overlay"
    >
        <div className="contact">
            <div className="contact-container">
                <ul>
                    <li><a href="https://t.me/XScream" target="_blank"><img src={telegram_icon} alt="" /></a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=79139019716"  target="_blank"><img src={whatsapp_icon} alt="" /></a></li>
                    <li><a href="tel:79139019716"><img src={phone_icon} alt="" /></a></li>
                    <li><a href="mailto:tigranoganisyan2004@gmail.com"><img src={gmail_icon} alt="" /></a></li>
                </ul>
            </div>
        </div>
    </Modal>
    )
}

export default Contact