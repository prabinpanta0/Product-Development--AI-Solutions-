import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AdminNavbar } from '../../components/admin/layout/AdminNavbar';
import { Dashboard } from './Dashboard';
import { Inquiries } from './Inquiries';
import { Write } from './Write';
import { Posts } from './Posts';
import { Settings } from './Settings';
import { AdminGallery } from './AdminGallery';
import { Navbar } from '../../components/layout/Navbar';

export const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
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
  );
};