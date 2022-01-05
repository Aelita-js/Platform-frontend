import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../../styles/ConfirmStyles/ConfirmStyles.css';

const Confirm = () => {
    const history = useHistory();

    return (
        <div className='confirm'>
            <div className='confirm-page'>
                <img src={logo} alt="logo" />
                <h1>Поздравляем!</h1>
                <h2>Вы успешно зарегистрировались!</h2>
                <button onClick={() => history.push('/')}>На главную</button>
            </div>
        </div>
    );
};

export default Confirm;