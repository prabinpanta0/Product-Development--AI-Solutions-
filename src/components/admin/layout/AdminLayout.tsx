// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AdminNavbar } from './AdminNavbar';
import { Dashboard } from '../../../pages/admin/Dashboard';
import { Inquiries } from '../../../pages/admin/Inquiries';
import { Write } from '../../../pages/admin/Write';
import { Posts } from '../../../pages/admin/Posts';
import { Settings } from '../../../pages/admin/Settings';
import { AdminGallery } from '../../../pages/admin/AdminGallery';


import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = document.cookie.split('; ').find(row => row.startsWith('isAuthenticated='));
    const isAuthenticatedValue = isAuthenticated ? isAuthenticated.split('=')[1] : null;
    if (!isAuthenticatedValue) {
      navigate('/admin/login');
    }
  }, [navigate]);


  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <AdminNavbar />
        <div className="p-4 md:ml-64 md:p-8">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="inquiries" element={<Inquiries />} />
            <Route path="write" element={<Write />} />
            <Route path="posts" element={<Posts />} />
            <Route path="gallery" element={<AdminGallery />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
