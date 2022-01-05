import React from 'react';
import logo from '../../assets/logo.png';
import mainPhoto from '../../assets/main-photo.png';
import delimeter from '../../assets/delimiter.png';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-scroll';
import '../../styles/IntroStyles/IntroStyles.css'; 

const Intro = () => {
    const history = useHistory();

    return (

        <div className='intro'>
            <div className='intro-header'>
                <div className='intro-menu'>
                    <ul>
                        <li onClick={() => history.push("/")}>Главная</li>
                        <li><Link to="about" smooth={true} duration={700} >О продукции</Link></li>
                        <li><Link to="lesson" smooth={true} duration={1000} >Смотреть курс</Link></li>
                        <li onClick={() => history.push("/course")}>Курс для продвинутых</li>
                    </ul>
                </div>
            </div>


            <div className='intro-info'>
                <div className='info-team'>
                    <img className='logo-img' src={logo} alt="logo" />
                    <img className='der-img' src={delimeter} alt="delimeter" />
                    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas accusantium deserunt, nulla vero</h4>
                </div>
                <div className='info-img'>
                    <img src={mainPhoto} alt="main-photo" />
                </div>
                <div className='info-head'>
                    <h2>Бактыгул Жетишикова</h2>
                    <img className='der-img' src={delimeter} alt="delimeter" />
                    <h4>Lorem, ipsum dolor.</h4>
                </div>
            </div>
        </div>
    );
};

export default Intro;