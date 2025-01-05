import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/ai-icon.png';
import { ThemeToggle } from '../ThemeToggle';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/articles', label: 'Articles' },
    { path: '/contact', label: 'Contact' },
    { path: '/events', label: 'Events' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg transition-colors sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-10 w-10" />
              <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Solutions
              </h1>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`${
                    isActive(path)
                      ? 'text-gray-600 dark:text-gray-300 font-semibold'
                      : 'text-gray-800 dark:text-gray-400 hover:text-primary dark:hover:text-highlight'
                  } transition-colors`}
                >
                  {label}
                </Link>
              ))}
            </div>
            <ThemeToggle />
            <button
            title = "Menu"
              className="md:hidden text-gray-800 dark:text-gray-400 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block ${
                  isActive(path)
                    ? 'text-gray-600 dark:text-gray-300 font-semibold'
                    : 'text-gray-800 dark:text-gray-400 hover:text-primary dark:hover:text-highlight'
                } transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
