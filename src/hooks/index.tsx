import React from 'react';
import { AuthProvider } from './auth';
import { ScrollProvider } from './scroll';

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AuthProvider>
      <ScrollProvider>{children}</ScrollProvider>
    </AuthProvider>
  );
};

export default AppProvider;
