'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme } from "@radix-ui/themes";

type ThemeType = 'inherit' | 'light' | 'dark';

interface ThemeContextType {
    theme: ThemeType;
    setTheme: (newTheme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeType>('inherit');

    useEffect(() => {
        const storedTheme = window.localStorage.getItem('x-theme') as ThemeType;
        if (storedTheme && ['inherit', 'light', 'dark'].includes(storedTheme)) {
            setTheme(storedTheme);
        }
    }, []);

    const changeTheme = (newTheme: ThemeType) => {
        setTheme(newTheme);
        window.localStorage.setItem('x-theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
            <Theme appearance={theme}>{children}</Theme>
        </ThemeContext.Provider>
    );
};

// Custom hook to use the ThemeContext
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
