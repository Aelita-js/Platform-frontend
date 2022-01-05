import React, { useContext, useState } from 'react';
import { Route } from 'react-router-dom';
import { Context } from '..';
import About from '../components/About/About';
import LogIn from '../components/Authentication/Login/LogIn';
import Intro from '../components/Intro/Intro';
import Lessons from '../components/Lessons/Lessons';
import { useAuth } from '../contexts/AuthContextProvider';
import '../styles/MainPageStyles/MainStyles.css';
import Auth from './Auth';

const Main = () => {
    // const {user} = useContext(Context);

    // const [token, setToken] = useState();
    // if(!token) {
    //     return <LogIn setToken={setToken} />
    // }
    // console.log(setToken);

    return (
        // <>
        //     {!user.isAuth ? (
        //         <div className='main'>
        //             <div className='main-intro'>
        //                 <Intro />
        //             </div>

        //             <div className='main-about'>
        //                 <About />
        //             </div>

        //             <div className='main-lessons'>
        //                 <Lessons />
        //             </div>
        //         </div>

        //     ) : (
        //         <Route exact path="/auth" component={Auth} />
        //     )}
        // </>




        <div className='main'>
            <div className='main-intro'>
                <Intro />
            </div>

            <div className='main-about'>
                <About />
            </div>

            <div className='main-lessons'>
                <Lessons />
            </div>
        </div>
    );
};

export default Main;