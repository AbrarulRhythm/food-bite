'use client'

import React, { use, useState } from 'react';
import { BsCart3 } from "react-icons/bs";
import CartMenu from '../CartMenu';
import { CartContext } from '@/context/CartProvider';

const HeaderCartIcon = () => {
    const { cart } = use(CartContext);
    const [oepnCart, setOpenCart] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpenCart(!oepnCart)}
                className='relative ml-3 w-9 h-9 rounded-full flex items-center justify-center text-lg bg-amber-900 hover:bg-amber-700 duration-300 cursor-pointer'>
                <BsCart3 />
                <span className={`${cart.length !== 0 ? 'flex' : 'hidden'} absolute text-[10px] font-medium -top-1 -right-1.5 w-4 h-4 bg-orange-500 items-center justify-center rounded-full`}>
                    {cart.length}
                </span>
            </button>
            <CartMenu
                oepnCart={oepnCart}
                setOpenCart={setOpenCart}
            ></CartMenu>
        </>
    );
};

export default HeaderCartIcon;