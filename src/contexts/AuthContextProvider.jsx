import axios from 'axios';
import React, { useReducer } from 'react';
import { useState } from 'react/cjs/react.development';
import { AUTH_API } from "../helpers/Constants";
export const authContext = React.createContext()

const INIT_STATE = {}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        default:
            return {...state}
    }
}

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const [auth, setAuth] = useState(false);

    const registerUser = async (newUser, history) => {
        console.log(newUser);
        try {
            const res = await axios.post(`${AUTH_API}/registration`, newUser);
            saveTokens(res.data.accessToken, res.data.refreshToken);
            history.push('/auth');
        } catch (e) {
            alert(e);
            console.log(e);
        }
    }
    
    const loginUser = async (user, history) => {
        console.log(user);
        try {
            const res = await axios.post(`${AUTH_API}/login`, user);
            saveTokens(res.data.accessToken, res.data.refreshToken)
            console.log(res);
            setAuth(true);
            history.push('/home');
        } catch (e) {
            alert(e);
            console.log(e);
        }
    }

     const logoutUser = async (token, history) => {
        try {
            window.location.reload();
            localStorage.removeItem('jwt-access');
        } catch (e) {
            console.log(e);
        }
    }


    const checkLogin = () => {
        if(auth === true) {
            return true;
        }
    }

    const saveTokens = (accessToken, refreshToken) => {
        localStorage.setItem('jwt-access', JSON.stringify(accessToken))
        localStorage.setItem('jwt-refresh', JSON.stringify(refreshToken))
    }

    
    return (
        <authContext.Provider value={{
            users: state.users,
            user: state.user,
            // getUsersData,
            // getUserData,
            loginUser,
            registerUser,
            checkLogin,
            logoutUser
        }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;