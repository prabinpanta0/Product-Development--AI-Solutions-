import { useEffect } from 'react';
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
// import Services from './pages/Services';
import { AdminLayout } from './components/admin/layout/AdminLayout';
import { Login } from './pages/admin/Login';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import error from './components/assets/404.svg';

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
            {/* <Route for 404 Error */}
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center min-h-screen text-center">

                        <img src={error} alt="404 Error" className="w-96 object-cover" />
              <p className="text-2xl text-gray-700 mb-8">Oops! The page you're looking for doesn't exist.</p>
              <a href="/" className="text-blue-500 hover:underline text-xl flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Go back to Home
              </a>
              </div>
            } />
            </Route>
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
};

export default App;