import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div className='relative hero-bg bg-[url(/hero-bg.png)] bg-center bg-cover bg-no-repeat py-12 md:py-14 lg:py-39.5 before:content-[""] before:absolute before:w-full before:h-full before:top-0 before:bg-black/50'>
            <div className='relative z-30 text-center'>
                <div className='container'>
                    <div className='flex flex-wrap -mx-3'>
                        <div className='w-full px-3'>
                            <div className='relative mb-4 md:mb-6'>
                                <span className='relative text-sm md:text-[22px] uppercase before:absolute before:content-[""] before:w-15 md:before:w-17.5 before:h-px before:bg-white before:top-[50%] before:-translate-y-[50%] before:-left-18.5 md:before:-left-24 after:absolute after:content-[""] after:w-15 md:after:w-17.5 after:h-px after:bg-white after:top-[50%] after:-translate-y-[50%] after:-right-18.5 md:after:-right-24'>Welcome to FoodBite</span>
                            </div>
                            <h1 className='text-2xl md:text-[40px] lg:text-[58px] 2xl:text-[68px] md:max-w-150 lg:max-w-250 font-semibold m-auto leading-[1.4] mb-4'>Delicious Food & Wonderful Eating Experience</h1>
                            <p className='text-sm md:text-lg mb-6'>We Serve Food, Harmony, & Laughter Since 1998</p>
                            <Link href='/foods' className='text-white bg-orange-500 py-3 px-8 rounded-md inline-block hover:bg-orange-600 duration-300'>View Foods</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;