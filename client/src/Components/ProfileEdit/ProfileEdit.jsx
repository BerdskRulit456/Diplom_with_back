// ProfileEdit.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import './ProfileEdit.css';

Modal.setAppElement('#root');

const ProfileEdit = ({ isOpen, isClose }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const postNewData = async(res, req) => {
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postNewData()
        // console.log('Submitted data:', formData);
        isClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={isClose}
            contentLabel="Edit Profile"
            className="Modal"
            overlayClassName="Overlay"
        >
            <div className="profile-edit-container">
                <form className="profile-edit-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Имя пользователя:</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">New password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Сохранить</button>
                    <button type="button" className="cancel-button" onClick={isClose}>Отмена</button>
                </form>
            </div>
        </Modal>
    );
};

export default ProfileEdit;