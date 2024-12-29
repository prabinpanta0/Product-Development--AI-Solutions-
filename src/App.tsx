import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useStore } from './store/store';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Articles } from './pages/Articles';
import { Contact } from './pages/Contact';
import { Events } from './pages/Events';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import { AdminLayout } from './components/admin/layout/AdminLayout';
import { Login } from './pages/admin/Login';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

export const App = () => {
  const { isDarkMode } = useStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
        <Routes>
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          />
          <Route path="/*" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="articles" element={<Articles />} />
            <Route path="contact" element={<Contact />} />
            <Route path="events" element={<Events />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
          </Route>
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
};

export default App;