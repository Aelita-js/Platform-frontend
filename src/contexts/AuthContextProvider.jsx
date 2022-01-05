import axios from 'axios';
import React, { useReducer } from 'react';
import { AUTH_API } from "../helpers/Constants";

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
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    // async function getUsersData(newUser) {
    //     const { data } = await axios(`${AUTH_API}/users`)
    //     dispatch({
    //         type: "GET_USERS_DATA",
    //         payload: data
    //     })
    // }

    const registerUser = async (newUser, history) => {
        await axios.post(`${AUTH_API}/registration`, newUser)
        // getUsersData()
        history.push('/auth')
    }

    const authUser = async (id, history) => {
        const { data } = await axios(`${AUTH_API}/login`)
        localStorage.setItem("user", JSON.stringify(data.id))
        history.push('/')
    }

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

    const storeToken = (token) => {
        localStorage.setItem('jwt-token', token);
    }

    
    return (
        <authContext.Provider value={{
            users: state.users,
            user: state.user,
            // getUsersData,
            // getUserData,
            authUser,
            registerUser
        }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;