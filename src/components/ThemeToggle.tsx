import React from 'react';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';
import { useStore } from '../store/store';

export const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useStore();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <RiSunLine className="h-5 w-5 text-yellow-500" />
      ) : (
        <RiMoonLine className="h-5 w-5 text-gray-500" />
      )}
    </button>
  );
};