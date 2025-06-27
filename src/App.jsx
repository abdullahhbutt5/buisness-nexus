// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ChatPageWrapper from "./pages/ChatPageWrapper";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import InvestorDashboard from "./pages/dashboard/InvestorDashboard";
import EntrepreneurDashboard from "./pages/dashboard/EntrepreneurDashboard";
import InvestorProfile from "./pages/profile/InvestorProfile";
import EntrepreneurProfile from "./pages/profile/EntrepreneurProfile";
import DashboardLayout from "./layouts/DashboardLayout";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard/investor"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <InvestorDashboard />
                </DashboardLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/entrepreneur"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <EntrepreneurDashboard />
                </DashboardLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/investor/:id"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <InvestorProfile />
                </DashboardLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/entrepreneur/:id"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <EntrepreneurProfile />
                </DashboardLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/chat/:userId"
            element={
              <PrivateRoute>
                <ChatPageWrapper />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
