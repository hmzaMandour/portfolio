import React from 'react';
import { FaCss3, FaGithub, FaHtml5, FaLaravel, FaReact, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from 'react-icons/io';
import { motion } from 'framer-motion';
import { RiTailwindCssFill } from 'react-icons/ri';

export const Skills = () => {
    const reactAnimation = {
        animate: {
            y: [0, -20, 0], 
            transition: {
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut", 
            },
        },
    };

    const jsAnimation = {
        animate: {
            y: [0, -20, 0], 
            transition: {
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut", 
            },
        },
    };

    const htmlAnimation = {
        animate: {
            y: [0, -20, 0], 
            transition: {
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut", 
            },
        },
    };

    const cssAnimation = {
        animate: {
            y: [0, -20, 0], 
            transition: {
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut", 
            },
        },
    };

    const sassAnimation = {
        animate: {
            y: [0, -20, 0], 
            transition: {
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut", 
            },
        },
    };

    const laravelAnimation = {
        animate: {
            y: [0, -20, 0], 
            transition: {
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut", 
            },
        },
    };

    const githubAnimation = {
        animate: {
            y: [0, -20, 0], 
            transition: {
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut", 
            },
        },
    };

    return (
        <div className='border-b border-gray-500 pb-24 px-5'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 1, y: -50 }}
                transition={{ duration: 0.3 }}
                className='my-20 text-center font-extrabold text-white text-4xl font-bold'>Professional <span className='text-purple-600'>Skills</span></motion.h1>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 1, x: -100 }}
                    transition={{ duration:1.5 }}
                    className='rounded-2xl border-4 border-gray-500 p-4'
                    variants={reactAnimation}
                    animate="animate"
                >
                    <FaReact className='text-7xl text-cyan-600' />
                    <p className='text-cyan-600 text-center font-bold'>React</p>
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 1, x: -100 }}
                    transition={{ duration:1.5 }}
                    className='rounded-2xl border-4 border-gray-500 p-4'
                    variants={jsAnimation}
                    animate="animate"
                >
                    <IoLogoJavascript className='text-7xl text-[#f7e025]' />
                    <p className='text-[#f7e025] text-center font-bold'>Javascript</p>

                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 1, x: -100 }}
                    transition={{ duration:1.5 }}
                    className='rounded-2xl border-4 border-gray-500 p-4'
                    variants={htmlAnimation}
                    animate="animate"
                >
                    <FaHtml5 className='text-7xl text-[#ff5733]' />
                    <p className='text-[#ff5733] text-center font-bold'>HTML</p>

                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 1, x: -100 }}
                    transition={{ duration:1.5 }}
                    className='rounded-2xl border-4 border-gray-500 p-4'
                    variants={cssAnimation}
                    animate="animate"
                >
                    <FaCss3 className='text-7xl text-[#2d53e5]' />
                    <p className='text-[#2d53e5] text-center font-bold'>CSS</p>

                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 1, x: -100 }}
                    transition={{ duration:1.5 }}
                    className='rounded-2xl border-4 border-gray-500 p-4'
                    variants={sassAnimation}
                    animate="animate"
                >
                    <FaSass className='text-7xl text-[#ce6b9c]' />
                    <p className='text-[#ce6b9c] text-center font-bold'>Sass</p>

                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 1, x: -100 }}
                    transition={{ duration:1.5 }}
                    className='rounded-2xl border-4 border-gray-500 p-4'
                    variants={laravelAnimation}
                    animate="animate"
                >
                    <FaLaravel className='text-7xl text-[#fb5541]' />
                    <p className='text-[#fb5541] text-center font-bold'>Laravel</p>

                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 1, x: -100 }}
                    transition={{ duration:1.5 }}
                    className='rounded-2xl border-4 border-gray-500 p-4'
                    variants={githubAnimation}
                    animate="animate"
                >
                    <FaGithub className='text-7xl text-white' />
                    <p className='text-white text-center font-bold'>GitHub</p>

                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 1, x: -100 }}
                    transition={{ duration:1.5 }}
                    className='rounded-2xl border-4 border-gray-500 p-4'
                    variants={githubAnimation}
                    animate="animate"
                >
                    <RiTailwindCssFill className='text-7xl text-[#722fda]' />
                    <p className='text-[#722fda] text-center font-bold'>Tailwind</p>

                </motion.div>
            </div>
        </div>
    );
};
