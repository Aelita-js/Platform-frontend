import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { authContext } from '../../../contexts/AuthContextProvider';
import '../../../styles/LoginStyles/LoginStyles.css';

const SingUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory()
    const { registerUser } = useContext(authContext);

    const handleClick = () => {
        registerUser({"email": email, "password": password}, history)
    }

    return (
        <div className='login'>
        <div className='login-cont'>
            <h3>Зарегистрировать пользователя</h3>
            <input type="email" placeholder='Электронная почта' onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder='Пароль' onChange={e => setPassword(e.target.value)} />
            <button onClick={handleClick}>Регистрация</button>
        </div>
        </div>
    );
};

export default SingUp;