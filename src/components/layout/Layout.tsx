// import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Chatbot } from '../Chatbot';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow dark:bg-gray-900 transition-colors">
        <Outlet />
        <Chatbot />
      </main>
      <Footer />
    </>
  );
};