"use client";

import { Theme } from "@radix-ui/themes";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (newTheme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // const getSystemTheme = (): ThemeType => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     return "dark";
  //   }
  //   return "light";
  // };

  const [theme, setTheme] = useState<ThemeType>("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(
      "x-theme"
    ) as ThemeType | null;
    if (storedTheme && ["light", "dark"].includes(storedTheme)) {
      setTheme(storedTheme);
    } else {
      // const systemTheme = getSystemTheme();
      const systemTheme = "light";
      setTheme(systemTheme);
      window.localStorage.setItem("x-theme", systemTheme);
    }
  }, []);

  const changeTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
    window.localStorage.setItem("x-theme", newTheme);
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
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
