import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  const getCookieValue = (name: string) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  };

  const isAuthenticated = getCookieValue('isAuthenticated');
  const isExpired = getCookieValue('isExpired');

  useEffect(() => {
    if (!isAuthenticated || isExpired === 'true') {
      navigate('/admin/login');
    }
  }, [isAuthenticated, isExpired, navigate]);

  if (!isAuthenticated || isExpired === 'true') {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};
