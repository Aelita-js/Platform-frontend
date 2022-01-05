import React from 'react';
import LogIn from '../components/Authentication/Login/LogIn';
import '../styles/MainPageStyles/MainStyles.css';

const Auth = () => {
    return (
        <div className='auth'>
            <LogIn />
        </div>
    );
};

export default Auth;