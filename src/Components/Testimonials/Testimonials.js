import React from 'react'
import './testimonials.css';
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from 'react';

import LeftArrow from "../../assets/leftArrow.png"
import RightArrow from "../../assets/rightArrow.png"
import { motion } from 'framer-motion'
const Testimonials = () => {


    const transtion = { type: "spring", duration: 3 };
    const [selected, setSelected] = useState(0)
    const tLength = testimonialsData.length;
    return (
        <div className="Testimonials" id='testimonials'>
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>What They</span>
                <span>Say About Us</span>
                <motion.span
                    key={selected}
                    initial={{ opacity: 1, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transtion}

                >
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span style={{ color: "var(--orange)" }}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ ...transtion, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ ...transtion, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                ></motion.div>




                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transtion}

                    src={testimonialsData[selected].image} alt="" />
                <div className="arrows">
                    <img
                        onClick={() => {
                            selected === 0 ? setSelected(tLength - 1) :
                                setSelected((prev) => prev - 1)
                        }}

                        src={LeftArrow} alt="" />
                    <img
                        onClick={() => {
                            selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1);
                        }}

                        src={RightArrow} alt="" />
                </div>
            </div>
        </div >
    )
}

export default Testimonials