import React, { useState } from 'react';
import './CheckEmail.css';

const CheckEmail = ({ isOpen, onClose, onConfirm, emailCode }) => {
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setCode(value.slice(0, 5));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.length === 5) {
      if (code === emailCode) {
        onConfirm(code);
      } else {
        alert('Неверный код');
      }
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
        <input
          type="text"
          maxLength="5"
          value={code}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Подтвердить</button>
      </div>
    </div>
  );
};

export default CheckEmail;
