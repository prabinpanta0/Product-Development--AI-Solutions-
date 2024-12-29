import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  RiDashboardLine,
  RiMessage2Line,
  RiPencilLine,
  RiSettings4Line,
  RiLogoutBoxLine,
  RiFileTextLine,
  RiGalleryLine,
} from 'react-icons/ri';

export const AdminNavbar = () => {
  const location = useLocation();
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
    <div className="bg-dark text-white h-screen w-64 fixed left-0 top-0">
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
  );
};