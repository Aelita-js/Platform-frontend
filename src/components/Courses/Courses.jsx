import React from 'react';
import delimeter from '../../assets/w-delimeter.png';
import dArrow from '../../assets/d-arrow.png';
import { Link } from 'react-scroll';
import '../../styles/CourseStyles/CourseStyles.css';

const Courses = () => {
    return (
        <div className='courses'>
            <div className='course-topic'>
                <h2>Курс для продвинутых</h2>
            </div>


            <div className='cor'>
                <div className='course-context'>
                    <div className='context-topik'>
                        <h2>01</h2>
                        <h3>Desing project</h3>
                    </div>
                    <div className='context-der'>
                        <img src={delimeter} alt="delimeter" />
                    </div>
                    <div className='contex-text'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam, officia ut quibusdam maxime vel impedit deleniti, quas esse, non illum unde saepe. Similique, fugiat?</p>
                    </div>
                </div>
                <div className='course-video'>
                    <iframe width="810" height="443" src="https://www.youtube.com/embed/YlH2oAWCyEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            <div className='d-arrow'>
                <Link to='2' smooth={true}>
                    <img src={dArrow} alt="to-down" />
                </Link>
            </div>

            <div className='cor left' id='2'>
                <div className='course-video'>
                    <iframe width="810" height="443" src="https://www.youtube.com/embed/YlH2oAWCyEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='course-context'>
                    <div className='context-topik'>
                        <h2>02</h2>
                        <h3>Desing project</h3>
                    </div>
                    <div className='context-der'>
                        <img src={delimeter} alt="delimeter" />
                    </div>
                    <div className='contex-text'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam, officia ut quibusdam maxime vel impedit deleniti, quas esse, non illum unde saepe. Similique, fugiat?</p>
                    </div>
                </div>
            </div>

            <div className='d-arrow'>
                <Link to='3' smooth={true}>
                    <img src={dArrow} alt="to-down" />
                </Link>
            </div>

            <div className='cor' id='3'>
                <div className='course-context'>
                    <div className='context-topik'>
                        <h2>03</h2>
                        <h3>Desing project</h3>
                    </div>
                    <div className='context-der'>
                        <img src={delimeter} alt="delimeter" />
                    </div>
                    <div className='contex-text'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam, officia ut quibusdam maxime vel impedit deleniti, quas esse, non illum unde saepe. Similique, fugiat?</p>
                    </div>
                </div>
                <div className='course-video'>
                    <iframe width="810" height="443" src="https://www.youtube.com/embed/YlH2oAWCyEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            <div className='d-arrow'>
                <Link to='4' smooth={true}>
                    <img src={dArrow} alt="to-down" />
                </Link>
            </div>

            <div className='cor left' id='4'>
                <div className='course-video'>
                    <iframe width="810" height="443" src="https://www.youtube.com/embed/YlH2oAWCyEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='course-context'>
                    <div className='context-topik'>
                        <h2>04</h2>
                        <h3>Desing project</h3>
                    </div>
                    <div className='context-der'>
                        <img src={delimeter} alt="delimeter" />
                    </div>
                    <div className='contex-text'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam, officia ut quibusdam maxime vel impedit deleniti, quas esse, non illum unde saepe. Similique, fugiat?</p>
                    </div>
                </div>
            </div>

            <div className='d-arrow'>
                <Link to='5' smooth={true}>
                    <img src={dArrow} alt="to-down" />
                </Link>
            </div>

            <div className='cor' id='5'>
                <div className='course-context'>
                    <div className='context-topik'>
                        <h2>05</h2>
                        <h3>Desing project</h3>
                    </div>
                    <div className='context-der'>
                        <img src={delimeter} alt="delimeter" />
                    </div>
                    <div className='contex-text'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam, officia ut quibusdam maxime vel impedit deleniti, quas esse, non illum unde saepe. Similique, fugiat?</p>
                    </div>
                </div>
                <div className='course-video'>
                    <iframe width="810" height="443" src="https://www.youtube.com/embed/YlH2oAWCyEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Courses;