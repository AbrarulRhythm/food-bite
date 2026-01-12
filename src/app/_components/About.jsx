import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { Dancing_Script } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const dancingScript = Dancing_Script({
    weight: ['400']
});

const About = () => {
    return (
        <div className='container'>
            <SectionTitle
                subtitle='Speical moments'
                title='About us'
            ></SectionTitle>

            <div className='flex flex-wrap -mx-3 justify-center'>
                <div className='w-full md:w-6/12 lg:w-4/12 px-3 mb-6'>
                    <Image
                        width={364}
                        height={410}
                        src={'/food_bite_about_1.png'}
                        alt='Food Bite about section image'
                        className='w-full'
                    ></Image>
                </div>
                <div className='w-full md:w-6/12 lg:w-4/12 px-3 mb-6'>
                    <div className='relative'>
                        <div className='absolute w-full h-full top-0m left-0 right-0 bg-black/60'></div>
                        <Image
                            width={364}
                            height={410}
                            src={'/food_bite_about_2.png'}
                            alt='Food Bite about section image'
                            className='w-full'
                        ></Image>
                        <div className='absolute top-0 left-0 w-full h-full text-center flex justify-center items-center'>
                            <div className='p-4'>
                                <span className={`${dancingScript.className} text-2xl inline-block mb-4`}>Jaste perception</span>
                                <h3 className='text-3xl font-bold uppercase mb-3 leading-[1.4] max-w-82.5 mx-auto tracking-widest'>TRADITIONAL & MODERN</h3>
                                <p className='leading-[1.8] max-w-82.5 mx-auto'>Sed ut perspiciatis unde omnis iste sunt tatam rem aperiam eaque illa</p>
                                <Link href='#' className='bg-orange-500 py-3 rounded-md px-7 inline-block mt-6 cursor-pointer hover:bg-orange-600 duration-300'>Read More</Link >
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-6/12 lg:w-4/12 px-3 mb-6'>
                    <Image
                        width={364}
                        height={410}
                        src={'/food_bite_about_3.png'}
                        alt='Food Bite about section image'
                        className='w-full'
                    ></Image>
                </div>
            </div>
        </div >
    );
};

export default About;