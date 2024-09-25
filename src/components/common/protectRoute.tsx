import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface ProtectedRouteProps {
  isAuthenticated: boolean; // Prop to check if the user is authenticated
  children: React.ReactNode; // The components to render if authenticated
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    toast.error("You must be logged in to access this page."); // Show toast notification
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
