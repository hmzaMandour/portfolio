import React from 'react';
import aboutimg from '../../assets/images/avatar2.png';
import { motion } from 'framer-motion';
import done2 from '../../json/Animation - 1728749372740.json'; 
import Lottie from 'lottie-react';

export const About = () => {
    const imageAnimation = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            repeat: Infinity,
            x: 0,
            transition: { duration: 1.5 },
        },
    };

    const textAnimation = {
        hidden: { opacity: 0, y: -100 },
        visible: {
            opacity: 1,
            repeat: Infinity,
            y: 0,
            transition: { duration: 1.5, delay: 0.3 },
        },
    };

    return (
        <div className='border-b border-gray-500 pb-2 px-5'> {/* Adjusted pb here */}
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 1, y: -50 }}
                transition={{ duration: 0.3 }}                
                className='my-10  font-extrabold text-center font-inter text-white text-4xl'> {/* Adjusted my here */}
                About <span className='text-purple-600'>Me</span>
            </motion.h1>

            <div className='flex items-center flex-wrap'>
                <motion.div
                    className='w-full lg:w-1/2 lg:p-8'
                    variants={imageAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className='flex items-center justify-center'>
                        <Lottie animationData={done2} />
                    </div>
                </motion.div>

                <motion.div
                    className='w-full lg:w-1/2'
                    variants={textAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6 font-light text-gray-500 tracking-tighter hover:text-gray-400 font-semibold'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, quo dignissimos ut quas debitis odio soluta veniam obcaecati. Repellat optio quos illum quidem consequuntur consectetur earum animi at laboriosam. Quas voluptates eius nam corrupti hic ullam quam, distinctio alias nobis doloribus quibusdam dolore aspernatur id.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
