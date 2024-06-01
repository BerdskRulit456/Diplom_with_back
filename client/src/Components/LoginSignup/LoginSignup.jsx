import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/LoginSignUp_icon/person.png';
import email_icon from '../Assets/LoginSignUp_icon/email.png';
import password_icon from '../Assets/LoginSignUp_icon/password.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import CheckEmail from './CheckEmail/CheckEmail';
import ResetPassword from './ResetPassword/ResetPassword';

export const LoginSignup = ({ setIsLoggedIn }) => {
    const [action, setAction] = useState("Sign Up");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isResetPasswordOpen, setIsResetPasswordOpen] = useState(false);
    const [emailCode, setEmailCode] = useState('');
    const navigate = useNavigate();

    const switchToSignup = () => setAction("Sign Up");

    const switchToLogin = () => setAction("Login");

    const openResPass = () => {
        setIsResetPasswordOpen(true)
    };

    const closeResPass = () => setIsResetPasswordOpen(false);

    const handleOpenModal = () => setIsModalOpen(true);

    const handleCloseModal = () => setIsModalOpen(false);

    const handleConfirmCode = async (code) => {
        console.log('Подтвержденный код:', code);
        handleCloseModal();
        try {
            const response = await axios.post('/register', { fullName, email, password });
            if ('token' in response.data) {
                window.localStorage.setItem('token', response.data.token);
            }
            setIsLoggedIn(true);
            message.success("Вы успешно зарегистрировались");
            navigate('/');
        } catch (e) {
            if (e.response && e.response.data.errors) {
                e.response.data.errors.forEach(error => {
                    message.error(error.msg);
                });
            } else {
                message.error("Произошла ошибка при регистрации");
            }
        }
    }

    const checkEmailCode = async () => {
        try {
            const response = await axios.post('/authEmail', { email });
            if (response.data.success) {
                setEmailCode(response.data.code.toString());
            } else {
                message.error("Не удалось отправить email");
                handleCloseModal();
            }
        } catch (e) {
            console.error(e);
            message.error("Произошла ошибка при отправке email");
            handleCloseModal();
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        if (action === "Sign Up") {
            try {
                handleOpenModal();
                checkEmailCode();
            } catch (e) {
                console.log(e);
            }
        } else if (action === "Login") {
            try {
                const response = await axios.post('/login', { email, password });
                if ('token' in response.data) {
                    window.localStorage.setItem('token', response.data.token);
                } else {
                    console.log('не удалось авторизоваться');
                }
                setIsLoggedIn(true);
                message.success("Вы успешно авторизовались");
                navigate('/');
            } catch (e) {
                message.error(e.response.data.message);
            }
        }
    };

    return (
        <div className='reg__comp'>
            <div className='container'>
                <div className='header'>
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>
                <form onSubmit={submitHandler}>
                    <div className="inputs">
                        {action !== "Login" &&
                            <div className="input">
                                <img src={user_icon} alt="" />
                                <input
                                    value={fullName}
                                    onChange={e => setFullName(e.target.value)}
                                    type="text"
                                    placeholder='Name'
                                    name='name'
                                />
                            </div>
                        }

                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                                placeholder='Email'
                                name="email"
                            />
                        </div>

                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                placeholder='Password'
                                name="password"
                            />
                        </div>

                        {action !== "Login" &&
                            <div className="input">
                                <img src={password_icon} alt="" />
                                <input
                                    value={confirm}
                                    onChange={e => setConfirm(e.target.value)}
                                    type="password"
                                    placeholder='Confirm password'
                                    name='confirm'
                                />
                            </div>
                        }

                    </div>
                    {action !== "Sign Up" &&
                        <div className="forgot-password">Lost password? <span onClick={openResPass}>Click Here!</span></div>
                    }
                    <div className="submit-container">
                        <button
                            type="button"
                            className={action === "Login" ? "submit gray" : "submit"}
                            onClick={switchToSignup}
                        >
                            Sign Up
                        </button>
                        <button
                            type="button"
                            className={action === "Sign Up" ? "submit gray" : "submit"}
                            onClick={switchToLogin}
                        >
                            Login
                        </button>
                        <button type="submit" className="submit"><div>Submit</div></button>
                    </div>
                </form>
            </div>
            <CheckEmail
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmCode}
                emailCode={emailCode}
            />
            <ResetPassword modalIsOpen={isResetPasswordOpen} closeModal={closeResPass} />
        </div>
    );
}

export default LoginSignup;
