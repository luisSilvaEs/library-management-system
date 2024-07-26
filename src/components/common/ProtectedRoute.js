// components/common/ProtectedRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { verifyToken } from "../../utils/mockupBackendUsers";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  const isAuthenticated = token && verifyToken(token);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
