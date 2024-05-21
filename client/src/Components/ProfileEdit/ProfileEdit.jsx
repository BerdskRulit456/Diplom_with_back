import React, { useState } from 'react';
import './ProfileEdit.css';

const ProfileEdit = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        bio: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь можно добавить логику для отправки данных на сервер
        console.log('Submitted data:', formData);
    };

    return (
        <div className="profile-edit-container">
        <form className="profile-edit-form" onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="username">Имя пользователя:</label>
            <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
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
            <label htmlFor="bio">О себе:</label>
            <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
            />
            </div>
            <button type="submit" className="submit-button">Сохранить</button>
        </form>
        </div>
    );
};

export default ProfileEdit;
