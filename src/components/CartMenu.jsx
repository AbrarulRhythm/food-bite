'use client'

import React, { use } from 'react';
import CartClose from './button/CartClose';
import { CartContext } from '@/context/CartProvider';
import { IoClose } from 'react-icons/io5';
import Image from 'next/image';

const CartMenu = ({ oepnCart, setOpenCart }) => {
    const { cart, setCart } = use(CartContext);

    const handleRemoveCart = (id) => {
        const filterCartItems = cart.filter(item => item.id !== id);
        setCart(filterCartItems);
    }

    return (
        <div className={`${oepnCart ? 'right-0' : '-right-88'} duration-500 w-87.5 bg-white h-screen fixed top-0 z-40 shadow-2xl overflow-y-scroll text-black`}>
            <CartClose
                setOpenCart={setOpenCart}
            ></CartClose>

            <div className='px-4 pt-5 pb-4'>
                {(!cart || cart.length === 0) ? (
                    <div className='empty-cart flex flex-col items-center justify-center'>
                        <Image
                            src='/empty-cart.png'
                            width={128}
                            height={128}
                            alt='Cart Icon'
                        ></Image>
                        <h3 className='text-2xl font-semibold'>Your Cart is Empty</h3>
                    </div>
                ) : (
                    <>
                        <h3 className='text-lg font-semibold mb-5'>My Cart ({cart.length})</h3>
                        {
                            cart.map(item => {
                                return (
                                    <div key={item.id} className='flex items-center justify-between mb-4'>
                                        <div className='flex items-center'>
                                            <Image
                                                width={80}
                                                height={80}
                                                src={item.foodImg}
                                                alt='Food Image'
                                                className='object-cover rounded-md'
                                            ></Image>
                                            <div className='ml-4'>
                                                <h4 className='text-base font-semibold mb-px'>{item.title}</h4>
                                                <h3 className='text-lg font-semibold text-orange-500 mb-2'>${item.price}</h3>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleRemoveCart(item.id)}
                                            className='text-red-500 text-lg w-6 h-6 flex justify-center items-center rounded-full ml-3 cursor-pointer hover:text-white hover:bg-red-600 duration-300'>
                                            <IoClose />
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </>
                )}
            </div>
        </div>
    );
};

export default CartMenu;