import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RedirectHandlerProps {
  children: React.ReactElement;
}

const RedirectHandler: React.FC<RedirectHandlerProps> = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  return !user ? (
    <Navigate to="/login" state={{ from: location }} replace />
  ) : (
    children
  );
};

export default RedirectHandler;
