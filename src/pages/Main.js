import React from 'react';
import About from '../components/About/About';
import Intro from '../components/Intro/Intro';
import Lessons from '../components/Lessons/Lessons';
import '../styles/MainPageStyles/MainStyles.css';

const Main = () => {

    return (

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