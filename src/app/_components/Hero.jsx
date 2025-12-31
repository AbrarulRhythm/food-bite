import React from 'react';

const Hero = () => {
    return (
        <div className='relative hero-bg bg-[url(/hero-bg.png)] bg-center bg-cover bg-no-repeat py-12 md:py-14 lg:py-39.5 before:content-[""] before:absolute before:w-full before:h-full before:top-0 before:bg-black/50'>
            <div className='relative z-30'>
                <div className='container'>
                    Helo
                </div>
            </div>
        </div>
    );
};

export default Hero;