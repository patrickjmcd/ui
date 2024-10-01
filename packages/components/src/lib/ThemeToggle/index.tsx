"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";

const ThemeToggle = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const targetTheme = theme === "dark" ? "light" : "dark";
    setTheme(targetTheme);
    console.log(`Theme set to ${targetTheme}`);
  };

  if (!mounted) return null;

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? (
        <SunIcon className="w-6 h-6 text-yellow-500" />
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
