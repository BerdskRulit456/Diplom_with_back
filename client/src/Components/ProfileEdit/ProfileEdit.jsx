import React, { useState } from 'react';
import Modal from 'react-modal';
import './ProfileEdit.css';
import axios from 'axios';

Modal.setAppElement('#root');

const ProfileEdit = ({ isOpen, isClose }) => {
    const [formData, setFormData] = useState({
        fullName: window.localStorage.getItem('fullName') || '',
        email: window.localStorage.getItem('email') || '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const postNewData = async () => {
        try {
            const userId = window.localStorage.getItem('_id'); 
            console.log('Sending data:', { userId, ...formData });
            const response = await axios.post('/setNewData', {
                userId,
                fullName: formData.fullName,
                email: formData.email,
                password: formData.password
            });
            console.log('Response:', response.data);
        } catch (e) {
            console.error('Error:', e);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postNewData();
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
