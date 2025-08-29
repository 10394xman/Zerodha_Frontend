import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return null; // or a loader
  if (!user) return <Navigate to="/auth" replace />;
  return children;
};

export default ProtectedRoute;
