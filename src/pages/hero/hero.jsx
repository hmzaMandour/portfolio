import React from 'react';
import profilepic from '../../assets/images/avatar.jpeg';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

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
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <motion.div
                    className='w-full lg:w-1/2'
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <div className='flex flex-col text-white items-center lg:items-start'>
                        <h1 className='pb-16 text-6xl font-thin tracking-tighter lg:mt-16 lg:text-7xl'>
                            Hamza Mandour
                        </h1>

                        <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tighter text-transparent'>
                            <TypeAnimation
                                sequence={[
                                    'Hello, I am Hamza Mandour.',
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

                        <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolor facilis omnis adipisci rerum cupiditate qui similique delectus numquam id nulla ut ea tempore quos aspernatur suscipit voluptas ullam sunt, repellat dolorum impedit sint consequuntur eligendi eaque! Beatae, cum earum!
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className='w-full lg:w-1/2 flex items-center justify-center lg:justify-end lg:p-8'
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <div>
                        <img src={profilepic} alt="Hamza Mandour" className='w-72 rounded-full' />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
