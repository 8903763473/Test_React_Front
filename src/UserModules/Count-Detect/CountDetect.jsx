import React, { createContext, useState } from 'react';

export const CountContext = createContext();

export const CountDetect = ({ children }) => {

    const [Items, setCartItems] = useState([]);
    const addToCart = (product) => {
        setCartItems(prevItems => [...prevItems, product]);
    };

    return (
        <CountContext.Provider value={{ Items, addToCart }}>
            {children}
        </CountContext.Provider>
    );
};


