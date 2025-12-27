'use client'

import { CartContext } from '@/context/CartProvider';
import React, { use, useState } from 'react';

const CartButton = ({ food }) => {
    const { addToCart } = use(CartContext);
    const [inCart, setInCart] = useState(false);

    const handleAddToCart = () => {
        setInCart(true);
        addToCart(food);
    }

    return (
        <button
            onClick={handleAddToCart}
            disabled={inCart}
            className='text-white px-3 py-3.5 rounded-md w-full bg-blue-500 hover:bg-blue-600 duration-300 cursor-pointer disabled:bg-blue-800 disabled:cursor-default'>
            {inCart ? 'Added' : 'Add to Cart'}
        </button>
    );
};

export default CartButton;