import React from 'react';
import { Navbar } from '../layouts/navbar';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from './skills/skillls';
import { Contact } from './contact/contact';
import { Footer } from '../layouts/footer';
import { Project } from './projects/project';

export const Home = () => {
    return (
        <div className='overflow-x-hidden '>
            <div className='fixed top-0 -z-10 h-full  w-full'>
                            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            </div>


            <div className='container mx-auto flex flex-col gap-10'>
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Project />
                <Contact />
            </div>
            <Footer />

            
        </div>
    );
};

