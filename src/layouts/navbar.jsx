import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/images/Screenshot__81_-removebg-preview.png';

export const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav className="bg-transparent py-6 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
                {/* Logo Section */}
                <div className="flex-1">
                    <img className="w-[200px]" src={logo} alt="Logo" />
                </div>

                {/* Hamburger Icon (visible on small screens) */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setNavOpen(!navOpen)}
                        className="text-white text-3xl focus:outline-none"
                    >
                        {navOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Navbar Links */}
                <div className={`w-full lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-8 lg:static ${navOpen ? 'block' : 'hidden'} absolute top-16 left-0 lg:bg-transparent bg-gray-900 lg:py-0 py-4`}>
                    <ul className="lg:flex lg:space-x-8 text-white font-semibold lg:text-right">
                        <li className="hover:text-[#351a7b] transition duration-300 cursor-pointer text-center py-2 lg:py-0">Home</li>
                        <li className="hover:text-[#351a7b] transition duration-300 cursor-pointer text-center py-2 lg:py-0">About</li>
                        <li className="hover:text-[#351a7b] transition duration-300 cursor-pointer text-center py-2 lg:py-0">Skills</li>
                        <li className="hover:text-[#351a7b] transition duration-300 cursor-pointer text-center py-2 lg:py-0">Projects</li>
                        <li className="hover:text-[#351a7b] transition duration-300 cursor-pointer text-center py-2 lg:py-0">Contact Me</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
