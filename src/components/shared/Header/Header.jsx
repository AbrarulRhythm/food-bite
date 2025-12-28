import Link from 'next/link';
import React from 'react';
import { FaBars } from "react-icons/fa6";
import HeaderCartIcon from '../../button/HeaderCartIcon';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="px-5 py-6 flex justify-between gap-5 bg-gray-900/40 items-center">
            <div className='container'>
                <div className='flex justify-between items-center'>
                    <Link href='/'>
                        {/* <img src='/logo.png' className="w-[160px]" /> */}
                        <Image width={160} height={28} src='/logo.png' alt='Logo' />
                    </Link>
                    <div className='flex  items-center'>
                        <div className='text-[22px] block md:hidden'>
                            <FaBars />
                        </div>
                        <div className='space-x-3 hidden md:block'>
                            <Link prefetch={false} className="btn" href='/foods'>Foods</Link>
                            <Link className="btn" href='/reviews'>Reviews</Link>
                        </div>
                        <HeaderCartIcon></HeaderCartIcon>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;