import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  RiDashboardLine,
  RiMessage2Line,
  RiPencilLine,
  RiSettings4Line,
  RiLogoutBoxLine,
  RiFileTextLine,
  RiGalleryLine,
  RiMenuLine,
  RiCloseLine,
} from 'react-icons/ri';
// import { Navbar } from '../../layout/Navbar';

export const AdminNavbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/admin', icon: RiDashboardLine, label: 'Dashboard' },
    { path: '/admin/inquiries', icon: RiMessage2Line, label: 'Inquiries' },
    { path: '/admin/write', icon: RiPencilLine, label: 'Write' },
    { path: '/admin/posts', icon: RiFileTextLine, label: 'Posts' },
    { path: '/admin/gallery', icon: RiGalleryLine, label: 'Gallery' },
    { path: '/admin/settings', icon: RiSettings4Line, label: 'Settings' },
  ];

  return (
    <div>
      <div className="bg-dark text-white h-screen w-64 fixed left-0 top-0 hidden lg:block">
        <div className="p-6">
            <h2 className="text-lg lg:text-xl font-bold mb-8 text-highlight pt-10 text-center lg:text-left">Admin Dashboard</h2>
          <nav className="space-y-2">
            {navLinks.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                  isActive(path)
                    ? 'bg-primary text-white'
                    : 'hover:bg-gray-700 text-gray-300 hover:text-white'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </Link>
            ))}
            <Link
              to="/"
              className="flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-lg text-accent hover:text-white transition-colors"
            >
              <RiLogoutBoxLine className="h-5 w-5" />
              <span>Logout</span>
            </Link>
          </nav>
        </div>
      </div>
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 text-white bg-dark fixed top-0 left-0 z-50"
        >
          {isOpen ? <RiCloseLine className="h-6 w-6" /> : <RiMenuLine className="h-6 w-6" />}
        </button>
        {isOpen && (
          <div className="bg-dark text-white h-screen w-64 fixed left-0 top-0 z-40">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-8 text-highlight">Admin Dashboard</h2>
              <nav className="space-y-2">
                {navLinks.map(({ path, icon: Icon, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                      isActive(path)
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-700 text-gray-300 hover:text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{label}</span>
                  </Link>
                ))}
                <Link
                  to="/"
                  className="flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-lg text-accent hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <RiLogoutBoxLine className="h-5 w-5" />
                  <span>Logout</span>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};