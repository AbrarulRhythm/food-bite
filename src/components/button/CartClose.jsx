'use client'

import React from 'react';
import { IoClose } from "react-icons/io5";

const CartClose = ({ setOpenCart }) => {
    return (
        <button
            onClick={() => setOpenCart(false)}
            className='bg-red-200 text-red-500 text-2xl w-10 h-10 flex justify-center items-center rounded-full mt-3 ml-3 cursor-pointer hover:text-white hover:bg-red-600 duration-300'>
            <IoClose />
        </button>
    );
};

export default CartClose;