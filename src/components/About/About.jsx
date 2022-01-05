import React from 'react';
import productImg from '../../assets/product.png';
import wDelimeter from '../../assets/w-delimeter.png';
import '../../styles/AboutStyles/AboutStyles.css';

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='about-topic'>
                <h2>О продукции</h2>
            </div>
            <div className='about-content'>
                <div className='content'>
                    <img src={wDelimeter} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, delectus id dolores temporibus eius facere voluptates eos expedita illo cum quisquam explicabo? Quia repellendus possimus ducimus nisi quas illum. Vel, obcaecati ad, debitis quisquam possimus itaque earum blanditiis amet recusandae asperiores esse ullam at, adipisci animi praesentium mollitia minus aliquid placeat architecto? Quam, incidunt distinctio. Sint nihil voluptatem molestias aliquid saepe facere explicabo nemo accusantium. Distinctio impedit laborum officiis libero iusto sunt nobis molestiae maiores. Commodi vero laborum sint enim?</p>
                </div>
                <img src={productImg} alt="" />
            </div>
        </div>
    );
};

export default About;