import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/ai-icon.png';
import { ThemeToggle } from '../ThemeToggle';

export const Navbar = () => {
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
    <nav className="bg-white dark:bg-gray-900 shadow-lg transition-colors">
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
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
