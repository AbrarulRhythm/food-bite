'use client'

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (items) => {
        setCart([items, ...cart]);
    }

    const cartInfo = {
        cart,
        setCart,
        addToCart
    }

    return (
        <CartContext value={cartInfo}>
            {children}
        </CartContext>
    );
};

export default CartProvider;