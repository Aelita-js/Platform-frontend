import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { authContext } from '../../../contexts/AuthContextProvider';
import '../../../styles/LoginStyles/LoginStyles.css';

const SingUp = () => {
    const history = useHistory()
    const { registerUser } = useContext(authContext);

    return (
        <div className='login'>
        <div className='login-cont'>
            <h3>Зарегистрировать пользователя</h3>
            <input type="email" placeholder='Электронная почта' />
            <input type="password" placeholder='Пароль' />
            <button onClick={(e) => registerUser(e, history)}>Регистрация</button>
        </div>
        </div>
    );
};

export default SingUp;