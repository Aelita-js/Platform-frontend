import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import delimeter from '../../assets/black-delimeter-arrow.png';
import { authContext } from '../../contexts/AuthContextProvider';
import '../../styles/LessonsStyles/LessonsStyles.css';

const Lessons = () => {
    const { logoutUser } = useContext(authContext);

    const handleClick = () => {
        logoutUser()
    }

    return (
        <div className='lesson' id='lesson'>
            <div className='lesson-topic'>
                <h2>Приятного просмотра!</h2>
            </div>

            <div className='les' id='1'>
                <div className='lesson-video'>
                    <iframe src="https://www.youtube.com/embed/YlH2oAWCyEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='lesson-context'>
                    <div className='context-topic'>
                        <h2>01</h2>
                        <h3>Desing project</h3>
                    </div>
                    <div className='context-text'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam, officia ut quibusdam maxime vel impedit deleniti, quas esse, non illum unde saepe. Similique, fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam, officia ut quibusdam maxime vel impedit deleniti, quas esse, non illum unde saepe. Similique, fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam.</p>
                    </div>
                </div>
            </div>

            <div className='arrow-delimeter'>
                <Link to='2' smooth={true}>
                    <img src={delimeter} alt="delimeter" />
                </Link>
            </div>

            <div className='les' id='2'>
                <div className='lesson-video'>
                    <iframe src="https://www.youtube.com/embed/YlH2oAWCyEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='lesson-context'>
                    <div className='context-topic'>
                        <h2>02</h2>
                        <h3>Desing project</h3>
                    </div>
                    <div className='context-text'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam, officia ut quibusdam maxime vel impedit deleniti, quas esse, non illum unde saepe. Similique, fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam.</p>
                    </div>
                </div>
            </div>

            <div className='arrow-delimeter'>
                <Link to='3' smooth={true}>
                    <img src={delimeter} alt="delimeter" />
                </Link> 
            </div>

            <div className='les' id='3'>
                <div className='lesson-video'>
                    <iframe src="https://www.youtube.com/embed/YlH2oAWCyEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='lesson-context'>
                    <div className='context-topic'>
                        <h2>03</h2>
                        <h3>Desing project</h3>
                    </div>
                    <div className='context-text'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam, officia ut quibusdam maxime vel impedit deleniti, quas esse, non illum unde saepe. Similique, fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam officia ut quibusdam maxime vel impedit deleniti.</p>
                    </div>
                </div>
            </div>

            <div className='logout-button'>
                <button onClick={handleClick}>ВЫЙТИ ИЗ СИСТЕМЫ</button>
            </div>
        </div>
    );
};

export default Lessons;