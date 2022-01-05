import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authContext } from '../../../contexts/AuthContextProvider';
import '../../../styles/LoginStyles/LoginStyles.css';

// async function loginUser(credentials) {
//     return fetch('https://jetteam-backend.herokuapp.com/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(data => data.json())
//    }

const LogIn = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    const {authUser} = useContext(authContext);

    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     const token = await loginUser({
    //       email,
    //       password
    //     });
    //     setToken(token);
    //   }

    function handleClick() {

    }

    return (
        <div className='login'>
        <div className='login-cont'>
            <h3>Войти в систему</h3>
            <input type="email" placeholder='Электронная почта' onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder='Пароль' onChange={e => setPassword(e.target.value)} />
            <button onClick={(e) => authUser(e, history)}>Войти</button>
        </div>
        </div>
    );
};

export default LogIn;