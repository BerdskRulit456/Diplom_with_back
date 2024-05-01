import React, { useState } from 'react';

const CheckEmail = ({ isOpen, onClose, onConfirm }) => {
        const [code, setCode] = useState('');

const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Удаляем все, кроме цифр
        setCode(value.slice(0, 5)); // Ограничиваем длину кода 5 символами
};

const handleSubmit = (e) => {
        e.preventDefault();
        if (code.length === 5) {
        onConfirm(code);
        } else {
        alert('Код должен состоять из 5 цифр!');
        }
};

if (!isOpen) return null;

return (
        <div className="modal">
        <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Подтверждение цифрового кода</h2>
                <form onSubmit={handleSubmit}>
                <input type="text" maxLength="5" value={code} onChange={handleChange} />
                <button type="submit">Подтвердить</button>
                </form>
        </div>
        </div>
);
};

export default CheckEmail;
