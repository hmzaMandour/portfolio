import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';
import image from '../../assets/images/Screenshot (83).png';
import image2 from '../../assets/images/Screenshot (84).png';
import { motion } from 'framer-motion';

export const Project = () => {



    return (
        <div
        className='border-b border-gray-500  px-5 pb-10'    

        >
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 1, y: -50 }}
                transition={{ duration: 0.3 }} 
                className='my-10 font-extrabold text-center font-inter text-white text-4xl'>
                My <span className='text-purple-600'>Project</span>
            </motion.h1>

            <div className="flex flex-wrap justify-center">
                <motion.div 
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6 h-auto rounded-xl shadow-lg flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-700"
                    whileHover={{ scale: 1.05 }} 
                    transition={{ duration: 0.5 }}
                >
                    <motion.div 
                        className="w-full h-60 overflow-hidden rounded-t-xl relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.img
                            className=" h-full w-full object-fill  cursor-pointer"
                            src={image2}
                            alt="Project"
                            whileHover={{ scale: 1.2 }} 
                            transition={{ duration: 0.5 }}
                        />
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-lg uppercase text-designColor font-bold text-white">
                               Social media
                            </h3>
                            <div className="flex space-x-3">
                                {/* <span className="text-xl w-9 h-9 rounded-full bg-black flex justify-center items-center text-gray-300 hover:text-designColor transition-colors duration-300 cursor-pointer">
                                    <BsGithub />
                                </span> */}
                                <span className="text-xl w-9 h-9 rounded-full bg-black flex justify-center items-center text-gray-300 hover:text-designColor transition-colors duration-300 cursor-pointer">
                                    <a href="https://670c098970908bbab4d74eec--lustrous-piroshki-4bebc0.netlify.app/">
                                        <FaGlobe />
                                    </a>
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="w-full mt-4 flex flex-col gap-4 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                    >
                        <p className="text-sm text-gray-400 tracking-wide leading-6">
                            A detailed description of the project goes here. Highlight its features, technology stack, and the purpose it serves.
                        </p>
                        <a href="https://670c098970908bbab4d74eec--lustrous-piroshki-4bebc0.netlify.app/">
                        <motion.button 
                            className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300"
                            whileHover={{ scale: 1.1 }} 
                            transition={{ duration: 0.3 }}
                        >
                            View Project
                        </motion.button>
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6 h-auto rounded-xl shadow-lg flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-700"
                    whileHover={{ scale: 1.05 }} 
                    transition={{ duration: 0.5 }}
                >
                    <motion.div 
                        className="w-full h-60 overflow-hidden rounded-t-xl relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.img
                            className="w-full h-full object-cover cursor-pointer"
                            src={image}
                            alt="Project"
                            whileHover={{ scale: 1.2 }} 
                            transition={{ duration: 0.5 }}
                        />
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-lg uppercase text-designColor font-bold text-white">
                                Market
                            </h3>
                            <div className="flex space-x-3">
                                {/* <span className="text-xl w-9 h-9 rounded-full bg-black flex justify-center items-center text-gray-300 hover:text-designColor transition-colors duration-300 cursor-pointer">
                                    <BsGithub />
                                </span> */}
                                <span className="text-xl w-9 h-9 rounded-full bg-black flex justify-center items-center text-gray-300 hover:text-designColor transition-colors duration-300 cursor-pointer">
                                    <a href="https://670c0a70853a21b459a1ee14--stupendous-travesseiro-952980.netlify.app/">
                                        <FaGlobe />
                                    </a>
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="w-full mt-4 flex flex-col gap-4 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                    >
                        <p className="text-sm text-gray-400 tracking-wide leading-6">
                            A detailed description of the project goes here. Highlight its features, technology stack, and the purpose it serves.
                        </p>
                        <a href="https://670c0a70853a21b459a1ee14--stupendous-travesseiro-952980.netlify.app/">
                                                    <motion.button 
                            className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300"
                            whileHover={{ scale: 1.1 }} 
                            transition={{ duration: 0.3 }}
                        >
                            View Project
                        </motion.button>
                        </a>
                    </motion.div>
                </motion.div>


                {/* <motion.div 
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6 h-auto rounded-xl shadow-lg flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-700"
                    whileHover={{ scale: 1.05 }} 
                    transition={{ duration: 0.5 }}
                >
                    <motion.div 
                        className="w-full h-60 overflow-hidden rounded-t-xl relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.img
                            className="w-full h-full object-cover cursor-pointer"
                            src={image}
                            alt="Project"
                            whileHover={{ scale: 1.2 }} 
                            transition={{ duration: 0.5 }}
                        />
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-lg uppercase text-designColor font-semibold">
                                Project Title
                            </h3>
                            <div className="flex space-x-3">
                                <span className="text-xl w-9 h-9 rounded-full bg-black flex justify-center items-center text-gray-300 hover:text-designColor transition-colors duration-300 cursor-pointer">
                                    <BsGithub />
                                </span>
                                <span className="text-xl w-9 h-9 rounded-full bg-black flex justify-center items-center text-gray-300 hover:text-designColor transition-colors duration-300 cursor-pointer">
                                    <FaGlobe />
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="w-full mt-4 flex flex-col gap-4 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                    >
                        <p className="text-sm text-gray-400 tracking-wide leading-6">
                            A detailed description of the project goes here. Highlight its features, technology stack, and the purpose it serves.
                        </p>
                        <motion.button 
                            className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300"
                            whileHover={{ scale: 1.1 }} 
                            transition={{ duration: 0.3 }}
                        >
                            View Project
                        </motion.button>
                    </motion.div>
                </motion.div> */}

            </div>
        </div>
    );
};
