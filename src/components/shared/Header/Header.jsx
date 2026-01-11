import Link from 'next/link';
import React from 'react';
import { FaBars } from "react-icons/fa6";
import HeaderCartIcon from '../../button/HeaderCartIcon';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

const Header = () => {
    return (
        <header className="py-6 flex justify-between gap-5 bg-gray-900/40 items-center">
            <div className='container'>
                <div className='flex justify-between items-center relative'>
                    <Link href='/' className='hover:opacity-60 duration-300' title='🍒 Food Bite'>
                        <Image width={160} height={28} src='/logo-white.png' alt='Logo' />
                    </Link>
                    <div className='flex items-center'>


                        {/* Mobile Menu */}
                        <MobileMenu></MobileMenu>

                        <div className='space-x-3 hidden md:block'>
                            <Link prefetch={false} className="btn" href='/foods'>Foods</Link>
                            <Link className="btn" href='/reviews'>Reviews</Link>
                            <Link className="btn" href='/feedback'>Feedbacks</Link>
                        </div>
                        <HeaderCartIcon></HeaderCartIcon>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;