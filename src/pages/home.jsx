import React from 'react';
import { Navbar } from '../layouts/navbar';
import { Hero } from './hero/hero';
import { About } from './about/about';

export const Home = () => {
    return (
        <div className='overflow-x-hidden '>
            <div className='fixed top-0 -z-10 h-full  w-full'>
                            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            </div>


            <div className='container mx-auto px-8'>
                <Navbar />
                <Hero />
                <About />
            </div>
            
        </div>
    );
};

