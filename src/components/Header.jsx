import Link from 'next/link';
import React from 'react';
import { FaBars } from "react-icons/fa6";

const Header = () => {
    return (
        <header className="px-5 py-6 flex justify-between gap-5 bg-gray-900/40 items-center">
            <div className='container'>
                <div className='flex justify-between items-center'>
                    <Link href='/'>
                        <img src='/logo.png' className="w-[160px]" />
                    </Link>
                    <div>
                        <div className='text-[22px] block md:hidden'>
                            <FaBars />
                        </div>
                        <div className='space-x-3 hidden md:block'>
                            <Link className="btn" href='/foods'>Foods</Link>
                            <Link className="btn" href='/reviews'>Reviews</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;