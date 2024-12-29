import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AdminNavbar } from './AdminNavbar';
import { Dashboard } from '../../../pages/admin/Dashboard';
import { Inquiries } from '../../../pages/admin/Inquiries';
import { Write } from '../../../pages/admin/Write';
import { Posts } from '../../../pages/admin/Posts';
import { Settings } from '../../../pages/admin/Settings';
import { AdminGallery } from '../../../pages/admin/AdminGallery';
// import { Navbar } from '../../layout/Navbar';

export const AdminLayout = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        
        <AdminNavbar />
        <div className="ml-64 p-8">
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