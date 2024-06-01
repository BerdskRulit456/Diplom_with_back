import React, { useState } from 'react';
import Modal from 'react-modal';
import './ResetPassword.css';
import axios from 'axios';
import { message } from 'antd';

Modal.setAppElement('#root');

const ResetPassword = ({ modalIsOpen, closeModal }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/resetPassword', { email });
            if (response.data.success) {
                message.success("Email для сброса пароля был успешно отправлен")
                closeModal();
            } else {
                message.error("Не удалось отправить email");
            }
        } catch (error) {
            console.error('Ошибка при сбросе пароля:', error);
            message.error("Произошла ошибка при сбросе пароля");
        }
    };

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <div className="modal-header">
                <h2>Восстановление пароля</h2>
                <button onClick={closeModal} className='close'>&times;</button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="modal-body">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="modal-footer">
                    <button type="submit" className="submit">Отправить</button>
                </div>
            </form>
        </Modal>
    );
};

export default ResetPassword;
