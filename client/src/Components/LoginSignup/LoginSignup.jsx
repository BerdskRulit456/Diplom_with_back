import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/LoginSignUp_icon/person.png'
import email_icon from '../Assets/LoginSignUp_icon/email.png'
import password_icon from '../Assets/LoginSignUp_icon/password.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import CheckEmail from './CheckEmail/CheckEmail'
// import CheckableTag from 'antd/es/tag/CheckableTag'

export const LoginSignup = ({setIsLoggedIn}) => {
    const [action, setAction] = useState("Sign Up")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [nameDirty, setNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [confirmDirty, setConfirmDirty] = useState(false)
    const [nameError, setNameError] = useState("Имя не может быть пустым!")
    const [emailError, setEmailError] = useState("Email не может быть пустым!")
    const [passwordError, setPasswordError] = useState("Пароль не может быть пустым!")
    const [confirmError, setConfirmError] = useState("Пароль не может быть пустым")
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const blurHandler = (e) => {
        switch(e.target.name){
            case "name":
                setNameDirty(true)
                break
                case "email":
                    setEmailDirty(true)
                    break
                    case "password":
                        setPasswordDirty(true)
                        break
                        case "confirm":
                            setConfirmDirty(true)
                            break
                        }
                    }
                    
                    const nameHandler = (e) =>{
                        const regex = /[0-9!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
                        const containsNumbers = e.target.value.split('').some(char => !isNaN(char));
                        const containsSpecialChars = regex.test(e.target.value);
                        setName(e.target.value);
                        if(e.target.value.length < 3){
                            setNameError("Имя должно содержать минмимум 3 буквы!")
                        } 
                        else if (!e.target.value){
                            setNameError("Имя не может быть пустым!")
                        }
                        else if(containsNumbers){
                            setNameError("Имя не может содержать цифры!")
                        }
                        else if(containsSpecialChars){
                            setNameError('Имя не может содержать специальные символы!')
        }
        else{
            setNameError('')
        }
    }
    
    const emailHandler = (e) =>{
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("Некорректный Email");
        } else {
            setEmailError("");
        }
    }
    
    const passwordHandler = (e) =>{
        setPassword(e.target.value);
        if(e.target.value.length < 3 || e.target.value.length > 25){
            setPasswordError('Пароль должен содержать от 3 до 25 символов');
        } else if (!e.target.value) {
            setPasswordError('Пароль не может быть пустым');
        } else {
            setPasswordError("");
        }
    }
    
    const confirmHandler = (e) =>{
        setConfirm(e.target.value);
        if(e.target.value.length < 3 || e.target.value.length > 25){
            setConfirmError('Пароль должен содержать от 3 до 25 символов');
        } else if (!e.target.value) {
            setConfirmError('Пароль не может быть пустым');
        } else {
            setConfirmError("");
        }
    }
    
    const switchToSignup = () => {
        setAction("Sign Up");
        setNameError("");
        setEmailError("");
        setPasswordError("");
        setConfirmError("");
        setNameDirty(false);
        setEmailDirty(false);
        setPasswordDirty(false);
        setConfirmDirty(false);
    };
    
    const switchToLogin = () => {
        setAction("Login");
        setNameError("");
        setEmailError("");
        setPasswordError("");
        setConfirmError("");
        setNameDirty(false);
        setEmailDirty(false);
        setPasswordDirty(false);
        setConfirmDirty(false);
    };
    
    const handleOpenModal = async(e) => {
        e.preventDefault()
        setIsModalOpen(true);
        
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    
    const handleConfirmCode = (code) => {
        console.log('Подтвержденный код:', code);
        // Дополнительная логика для обработки подтвержденного кода
        handleCloseModal();
    };

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault()
        if(action === "Sign Up"){
            try{
                const response = await axios.post('/authEmail', {
                    // fullName: name,
                    email: email
                    // password: password
                })
                // setIsLoggedIn(true)
                // message.success("Рады знакомству, " + response.data.fullName)
                // navigate('/')
            }
            catch(e){
                console.error(e)
                message.error("Неверно заполнены поля!")
            }
        }


        else if(action === "Login"){
            try{
                const response = await axios.post('/login', {
                    email: email,
                    password: password
                })
                console.log(response.data)
                setIsLoggedIn(true)
                message.success("Вы успешно авторизовались")
                navigate('/')
            }
            catch(e){
                message.error(e.response.data.message)
            }
        }
    }

    
    
    return (
        <div className='reg__comp'>
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <form>
            <div className="inputs">
                {(nameDirty && nameError) && <div style={{color: 'red', margin: 'auto'}}>{nameError}</div>}
                {action !== "Login" && 
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input 
                            value={name} 
                            onChange={e => nameHandler(e)} 
                            onBlur={e => blurHandler(e)} 
                            type="text" 
                            placeholder='Name' 
                            name='name'
                        />
                    </div>
                }

                {(emailDirty && emailError) && <div style={{color: 'red', margin: 'auto'}}>{emailError}</div>}
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input 
                        value={email} 
                        onChange={e => emailHandler(e)} 
                        onBlur={e => blurHandler(e)} 
                        type="email" 
                        placeholder='Email'  
                        name="email"
                    />
                </div>

                {(passwordDirty && passwordError) && <div style={{color: 'red', margin: 'auto'}}>{passwordError}</div>}
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input 
                        value={password} 
                        onChange={e => passwordHandler(e)}  
                        onBlur={e => blurHandler(e)} 
                        type="password" 
                        placeholder='Password'  
                        name="password"
                    />
                </div>

                {(confirmDirty && confirmError) && <div style={{color: 'red', margin: 'auto'}}>{confirmError}</div>}
                {action !== "Login" && 
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input 
                            value={confirm} 
                            onChange={e => confirmHandler(e)} 
                            onBlur={e => blurHandler(e)} 
                            type="password" 
                            placeholder='Confirm password' 
                            name='confirm'
                        />
                    </div>
                }

            </div>
            {action !== "Sign Up" && 
                <div className="forgot-password">Lost password? <span>Click Here!</span></div>
            }
            <div className="submit-container">
                <button 
                    type="button" 
                    className={action === "Login" ? "submit gray" : "submit"} 
                    onClick={() => switchToSignup()}
                >
                    Sign Up
                </button>
                <button 
                    type="button" 
                    className={action === "Sign Up" ? "submit gray" : "submit"} 
                    onClick={() => switchToLogin()}
                >
                    Login
                </button>
                <button type="submit" className="submit" onClick={submitHandler} ><div>Submit</div></button>
                {/* <CheckEmail isOpen={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmCode} /> */}
            </div>
        </form>
    </div>
</div>
    )
}

export default LoginSignup