import { Dancing_Script } from 'next/font/google';
import React from 'react';

const dancingScript = Dancing_Script({
    weight: ['400']
});

const SectionTitle = ({ classes, subtitle, title }) => {
    return (
        <div className={`${classes} text-center mb-11 lg:mb-14`}>
            <span className={`${dancingScript.className} text-xl lg:text-2xl mb-2.5 lg:mb-5 inline-block`}>{subtitle}</span>
            <h1 className='uppercase text-[34px] md:text-4xl lg:text-5xl font-semibold tracking-widest'>{title}</h1>
        </div>
    );
};

export default SectionTitle;