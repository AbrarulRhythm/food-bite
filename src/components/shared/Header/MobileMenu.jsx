'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { MdOutlineClose } from "react-icons/md";

const MobileMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div>
            <div
                onClick={() => setOpenMenu(!openMenu)}
                className='text-[22px] block md:hidden'>
                {openMenu ? <MdOutlineClose className='text-[26px]' /> : <FaBars />}
            </div>
            <ul
                className={`${openMenu ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'} duration-300 absolute left-0 right-0 top-[99%] mt-6 z-50 bg-white text-gray-600 p-4 rounded-md`}>
                <li>
                    <Link
                        onClick={() => setOpenMenu(!openMenu)}
                        prefetch={false} className='p-1 block' href='/foods'>Foods</Link>
                </li>
                <li>
                    <Link
                        onClick={() => setOpenMenu(!openMenu)}
                        href='/reviews' className='p-1 block'>Reviews</Link>
                </li>
                <li>
                    <Link
                        onClick={() => setOpenMenu(!openMenu)}
                        href='/feedback' className='p-1 block'>Feedbacks</Link>
                </li>
            </ul>
        </div>
    );
};

export default MobileMenu;