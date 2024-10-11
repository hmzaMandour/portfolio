import React from 'react';
import aboutimg from '../../assets/images/avatar2.png'

export const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-white text-4xl'>About <span className='text-purple-600'>Me</span>
            </h1>

            <div className='flex items-center flex-wrap'>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <img className='rounded-3xl w-[35vw] h-[40vh]' src={aboutimg} alt="" />
                    </div>

                </div>
                    <div className='w-full lg:w-1/2'>
                        <div className='flex justify-center lg:justify-start'>
                            <p className=' my-2 max-w-xl py-6 text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, quo dignissimos ut quas debitis odio soluta veniam obcaecati. Repellat optio quos illum quidem consequuntur consectetur earum animi at laboriosam. Quas voluptates eius nam corrupti hic ullam quam, distinctio alias nobis doloribus quibusdam dolore aspernatur id.</p>
                        </div>
                    </div>

            </div>
            
        </div>
    );
};

