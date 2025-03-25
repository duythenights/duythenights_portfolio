"use client";

import { ThemeType, useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "./button";

// Theme options
const themes = [
  { key: "light", toggle: "dark", label: "Light", icon: <SunIcon /> },
  { key: "dark", toggle: "light", label: "Dark", icon: <MoonIcon /> },
];

// Main component
const ThemeToggle = () => {
  const [preferredTheme, setPreferredTheme] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  console.log("preferredTheme", preferredTheme);
  // Sync preferred theme with current theme
  useEffect(() => {
    if (theme) {
      setPreferredTheme(theme || "dark");
    }
  }, [theme]);

  // Handle theme toggle
  const handleThemeToggle = () => {
    if (setTheme) {
      const toggleTheme =
        (themes.find(({ key }) => key === theme)?.toggle as ThemeType) || theme;

      setTheme(toggleTheme);
    } else {
      console.error("setTheme function is not available.");
    }
  };

  // Get the active icon based on the current theme
  const getCurrentThemeIcon = () => {
    const activeTheme = themes.find(({ key }) => key === preferredTheme);
    return activeTheme?.icon;
  };

  return (
    <div className="relative inline-block text-left">
      <Button
        onClick={handleThemeToggle}
        className={cn(
          "h-8 w-8 inline-flex select-none justify-center rounded-md px-0 py-0 text-sm font-medium",
          "bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-100 hover:dark:bg-gray-600",
          "border border-gray-300 dark:border-transparent",
          "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        )}
      >
        {getCurrentThemeIcon()}
      </Button>
    </div>
  );
};

export default ThemeToggle;
