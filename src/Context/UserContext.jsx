// UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // Cek apakah ada data user di localStorage
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        // Cek apakah user telah login
        return localStorage.getItem('isLoggedIn') === 'true';
    });

    return (
        <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
};
