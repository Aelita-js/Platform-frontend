import axios from 'axios';
import React, { useReducer } from 'react';
import { useState } from 'react/cjs/react.development';
import { AUTH_API } from "../helpers/Constants";
import {useHistory} from 'react-router-dom'
export const authContext = React.createContext()

const INIT_STATE = {}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        // case "GET_USERS_DATA":
        //     return { ...state, users: action.payload }
        // case "GET_USER_DATA":
        //     return { ...state, user: action.payload}
        default:
            return {...state}
    }
}

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const [auth, setAuth] = useState(false);
    // async function getUsersData(newUser) {
    //     const { data } = await axios(`${AUTH_API}/users`)
    //     dispatch({
    //         type: "GET_USERS_DATA",
    //         payload: data
    //     })
    // }

    // const registerUser = async(email, link) => {
    //     const response= await axios.post(`${AUTH_API}/registration`, email, link)
    //    }

    const registerUser = async (newUser, history) => {
        // e.preventDefault();
        // const newUser = {
        //     email: e.target, 
        //     password: e.target
        // }
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
    
    // axios.post(`${AUTH_API}/registration`, {
        //     email: email,
        //     password: password
    // })
    // .then(function (response) {
        //     console.log(response);
        //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    
    const loginUser = async (user, history) => {
        // e.preventDefault();
        // const user = {
        //     email: e.target,
        //     password: e.target
        // }
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


    // const loginUser = async (user, history) => {
        //     try {
    //         const { data } = await axios.post(`${AUTH_API}/login`, user);
    //         // localStorage.setItem("email", data.token);
    //         // localStorage.setItem("password", data.storeToken);
    //         history.push('/');
    //     } catch (e) {
        //         alert(e);
    //     }
    
    // }

     const logoutUser = async (token, history) => {
        try {
            window.location.reload();
            // await axios.post(`${AUTH_API}/logout`);
            localStorage.removeItem('jwt-access');
            // setAuth(false);
            // history.push('/');
        } catch (e) {
            console.log(e);
        }
    }


    const checkLogin = () => {
        if(auth === true) {
            return true;
        }
    }
    

    // * ====================props.checkLogin==============================================================================================

    // const getUserData = async (id) => {
    //     const { data } = await axios(`${AUTH_API}/users/${id}`)
    //     dispatch({
    //         type: "GET_USER_DATA",
    //         payload: data
    //     })
    // }


    // async function registerUser(e, history) {
    //     e.preventDefault();
    //     const newUser = {
    //         email: e.target.value,
    //         password: e.target.value
    //     }
    //     try {
    //         const res = await axios.post(`${AUTH_API}/registration`, newUser);
    //         if(res.data && res.data.token) {
    //             storeToken(res.data.token)
    //         }
    //         alert(res.status, res.statusText)
    //         history.push('/')
    //     }
    //     catch(e) {
    //         alert(e.response.statusText)
    //     }
    // }

    // const refreshTokenStore = (token) => {
    //     debugger;
    //     localStorage.setItem('jwt-refresh', JSON.stringify(token));
    // }
    // const accessTokenStore = (token) => {
    //     localStorage.setItem('jwt-access', JSON.stringify(token));
    // }

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