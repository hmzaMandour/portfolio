import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';

export const Footer = () => {
    return (
        <footer className="bg-gray-900 mt-14 py-8 border-t border-gray-500 text-center">
            <div className="container mx-auto">
                <h2 className="text-purple-600 text-2xl font-semibold mb-4">Follow Me</h2>
                
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-purple-600 transition duration-300">
                        <FaGithub className="text-2xl" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-purple-600 transition duration-300">
                        <FaLinkedin className="text-2xl" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-purple-600 transition duration-300">
                        <FaTwitter className="text-2xl" />
                    </a>
                </div>

                <p className="text-slate-500 text-sm">© 2024 Your Name. All rights reserved.</p>
            </div>
        </footer>
    );
};
