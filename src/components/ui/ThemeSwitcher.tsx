'use client';

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";


import {
  SunIcon,
  MoonIcon,
  Half2Icon,
} from "@radix-ui/react-icons";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";


// Theme options
const themes = [
  { key: "light", label: "Light", icon: <SunIcon /> },
  { key: "dark", label: "Dark", icon: <MoonIcon /> },
  { key: "inherit", label: "System", icon: <Half2Icon /> },
];


// Main component
const ThemeSwitcher = () => {
  const [preferredTheme, setPreferredTheme] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  // Sync preferred theme with current theme
  useEffect(() => {
    setPreferredTheme(theme);
  }, [theme]);

  // Handle theme change
  const handleThemeChange = (key: "inherit" | "light" | "dark") => {
    if (setTheme) {
      setTheme(key);
    } else {
      console.error("setTheme function is not available.");
    }
  };

  // Get the active icon based on the current theme
  const getCurrentThemeIcon = () => {
    const activeTheme = themes.find(({ key }) => key === preferredTheme);
    return activeTheme?.icon || <Half2Icon className="h-5 w-5 text-gray-700 dark:text-gray-300" />;
  };

  return (
    <div className="relative inline-block text-left">
      <DropdownMenuPrimitive.Root>
        {/* Trigger Button */}
        <DropdownMenuPrimitive.Trigger
          className={cn(
            "inline-flex select-none justify-center rounded-md px-2.5 py-2 text-sm font-medium",
            "bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-100 hover:dark:bg-gray-600",
            "border border-gray-300 dark:border-transparent",
            "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          )}
          aria-label="Theme Selector"
        >
          {getCurrentThemeIcon()}
        </DropdownMenuPrimitive.Trigger>

        {/* Dropdown Content */}
        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            align="end"
            sideOffset={5}
            className={cn(
              "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
              "w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56",
              "bg-gray-50 dark:bg-gray-700"
            )}
          >
            {themes.map(({ key, label, icon }) => (
              <DropdownMenuPrimitive.Item
                key={key}
                className={cn(
                  "flex w-full cursor-pointer select-none items-center rounded-md px-2 py-2 text-xs outline-none",
                  "text-gray-500 focus:bg-gray-200 dark:text-gray-400 dark:focus:bg-gray-800"
                )}
                onClick={() => handleThemeChange(key as "inherit" | "light" | "dark")}
                aria-label={`Switch to ${label} mode`}
              >
                {React.cloneElement(icon, {
                  className: "w-5 h-5 mr-2 text-gray-700 dark:text-gray-300",
                })}
                <span className="flex-grow text-gray-700 dark:text-gray-300">{label}</span>
              </DropdownMenuPrimitive.Item>
            ))}
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};

export default ThemeSwitcher;
