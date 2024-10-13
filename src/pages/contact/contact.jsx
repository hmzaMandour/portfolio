import React from 'react';
import { FaMessage } from 'react-icons/fa6';
import Lottie from "lottie-react";
import done from '../../json/Animation - 1728753065831.json'; 
import { motion } from 'framer-motion';

export const Contact = () => {
    const headingAnimation = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5 },
        },
    };

    const textAnimation = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, delay: 0.3 },
        },
    };

    const formAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, delay: 0.6 },
        },
    };

    return (
        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center py-10  px-5">
            {/* Animation Section */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
                <motion.div
                    variants={headingAnimation}
                    initial="hidden"
                    whileInView="visible"
                    className="max-w-full h-auto">
                    <Lottie animationData={done} />
                </motion.div>
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-1/2 lg:pl-8">
                <motion.h1
                    variants={headingAnimation}
                    initial="hidden"
                    whileInView="visible"
                    className="text-slate-300 text-3xl font-semibold mb-4 flex items-center"
                >
                    <FaMessage className="text-slate-500 mr-2 text-2xl" />
                    Contact Me
                </motion.h1>

                <motion.p
                    variants={textAnimation}
                    initial="hidden"
                    whileInView="visible"
                    className="text-slate-500 mb-6 leading-6"
                >
                    Contact us for more information and get notified when I publish something new.
                </motion.p>

                <motion.form
                    variants={formAnimation}
                    initial="hidden"
                    whileInView="visible"
                    className="space-y-6"
                >
                    {/* Email Input */}
                    <div className="flex flex-col">
                        <label className="text-slate-500 text-lg mb-2" htmlFor="email">
                            Email Address:
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            className="p-3 rounded-lg bg-gray-800 text-white border border-slate-500 focus:outline-none focus:border-purple-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Message Textarea */}
                    <div className="flex flex-col">
                        <label className="text-slate-500 text-lg mb-2" htmlFor="message">
                            Your Message:
                        </label>
                        <textarea 
                            id="message" 
                            rows="5" 
                            className="p-3 rounded-lg bg-gray-800 text-white border border-slate-500 focus:outline-none focus:border-purple-500"
                            placeholder="Write your message here"
                        />
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="w-full py-3 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
                    >
                        Submit
                    </button>
                </motion.form>
            </div>
        </div>
    );
};
