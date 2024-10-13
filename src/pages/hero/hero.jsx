import React from 'react';
import profilepic from '../../assets/images/avatar.jpeg';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import done3 from '../../json/Animation - 1728750548761.json'

export const Hero = () => {
    const direction = 'down'; // Set your direction here
    const duration = 1; // Increased duration to make the animation slower

    const variants = {
        initial: {
            opacity: 0,
            y: direction === 'down' ? 20 : -20,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration },
        },
        exit: {
            opacity: 0,
            y: direction === 'down' ? -20 : 20,
            transition: { duration },
        },
    };

    return (
        <div className='border-b border-gray-500 pb-4 lg:mb-35 px-5'>
            <div className='flex flex-wrap '>
                <motion.div
                    className='w-full lg:w-1/2'
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                    exit="exit"
                    viewport={{ once: true, amount: 0.5 }} 
                >
                    <div className='flex flex-col text-white items-center lg:items-start'>
                        <h1 className='pb-16 text-purple-900 font-extrabold lg:w-[20vw] text-6xl text-center  font-thin tracking-tighter lg:mt-16 lg:text-6xl'>
                            Magic is something we do!
                        </h1>

                        <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 font-bold bg-clip-text text-4xl tracking-tighter text-transparent'>
                            <TypeAnimation
                                sequence={[
                                    'Hello, I am Hamza .',
                                    2000,
                                    'A Full Stack Developer.',
                                    2000,
                                    'Welcome to my portfolio!',
                                    2000,
                                ]}
                                speed={50}
                                wrapper="span"
                                repeat={Infinity}
                            />
                        </span>

                        <p className='my-2 max-w-xl py-6 font-light text-gray-500 tracking-tighter hover:text-gray-400 font-semibold'>
                                In the world of software, I believe that true success is not just about building great technology but creating solutions that bring value to people's lives. My goal is to design and develop software that simplifies processes, solves real-world problems, and makes a positive impact.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className='w-full lg:w-1/2 flex items-center justify-center lg:justify-end lg:p-8 '
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                    exit="exit"
                    viewport={{ once: true, amount: 0.5 }} 
                >
                    <div>
                        <Lottie  animationData={done3} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
