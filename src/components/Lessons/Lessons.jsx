import React, { useContext } from 'react';
import delimeter from '../../assets/delimiter.png';
import { authContext } from '../../contexts/AuthContextProvider';
import '../../styles/LessonsStyles/LessonsStyles.css';

const Lessons = () => {
    // const { logoutUser } = useContext(authContext);

    // const handleClick = () => {
    //     logoutUser()
    // }

    return (
        <div className='lesson' id='lesson'>
            <div className='lesson-topic'>
                <h2>Приятного просмотра!</h2>
            </div>
            

            <div className='les'>
                <div className='lesson-context'>
                    <div className='context-topic'>
                        <h2>01</h2>
                        <h3>Desing project</h3>
                    </div>
                    <div className='context-der'>
                        <img src={delimeter} alt="delimeter" />
                    </div>
                    <div className='context-text'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam, officia ut quibusdam maxime vel impedit deleniti, quas esse, non illum unde saepe. Similique, fugiat?</p>
                    </div>
                </div>
                <div className='lesson-video'>
                    <iframe width="840" height="473" src="https://www.youtube.com/embed/YlH2oAWCyEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>


            <div className='les left'>
                <div className='lesson-video'>
                    <iframe width="840" height="473" src="https://www.youtube.com/embed/YlH2oAWCyEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='lesson-context'>
                    <div className='context-topic'>
                        <h2>02</h2>
                        <h3>Desing project</h3>
                    </div>
                    <div className='context-der'>
                        <img src={delimeter} alt="delimeter" />
                    </div>
                    <div className='context-text'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam, officia ut quibusdam maxime vel impedit deleniti, quas esse, non illum unde saepe. Similique, fugiat?</p>
                    </div>
                </div>
            </div>


            <div className='les'>
                <div className='lesson-context'>
                    <div className='context-topic'>
                        <h2>03</h2>
                        <h3>Desing project</h3>
                    </div>
                    <div className='context-der'>
                        <img src={delimeter} alt="delimeter" />
                    </div>
                    <div className='context-text'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam, officia ut quibusdam maxime vel impedit deleniti, quas esse, non illum unde saepe. Similique, fugiat?</p>
                    </div>
                </div>
                <div className='lesson-video'>
                    <iframe width="840" height="473" src="https://www.youtube.com/embed/YlH2oAWCyEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            <div className='logout-button'>
                <button>ВЫЙТИ ИЗ СИСТЕМЫ</button>
            </div>
        </div>
    );
};

export default Lessons;