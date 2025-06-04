import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const PreAuthRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return !token ? children : <Navigate to="/dashboard" replace />;
};

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/signup" replace />} />
      <Route
        path="/signup"
        element={
          <PreAuthRoute>
            <SignUp />
          </PreAuthRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PreAuthRoute>
            <Login />
          </PreAuthRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
