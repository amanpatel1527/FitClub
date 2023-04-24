import React from 'react'
import Header from '../Header/Header'
import './hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import NumberCounter from 'number-counter';
import { motion } from 'framer-motion'


const Hero = () => {

    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className="hero" id='hero'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? "165px" : "238px" }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span className='span1'>The best fitness club in the city</span>
                </div>




                {/*Hero Heading*/}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>ideal body</span>
                    </div>
                    <div><span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>



                {/*Figure Div*/}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={140} start={60} delay='4' preFix="+" />

                        </span>
                        <span>expert Coaches</span>
                    </div>
                    <div>
                        <span><NumberCounter end={978} start={750} delay='4' preFix="+" /></span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span><NumberCounter end={50} start={0} delay='4' preFix="+" /></span>
                        <span>fitness programs</span>
                    </div>
                </div>




                {/*Button*/}
                <div className="hero-btn">
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            <div className="right-h">
            <button className='btn'>Join Now</button>
            




                {/*Heart Rate*/}

                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}

                    className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span><span>116 bpm</span>
                </motion.div>


                {/*Hero Images*/}

                <img src={hero_image} alt="" className='hero-image' />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '23rem' }}
                    transition={transition}

                    src={hero_image_back} alt="" className='hero-image-back' />
                <img src="" alt="" />




                {/*Calories Section*/}


                <motion.div
                    initial={{ right: "43rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}

                    className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burn</span>
                        <span>220kcal</span>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Hero


