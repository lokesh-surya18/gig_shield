import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import VerificationPage from './pages/VerificationPage';
import DashboardPage from './pages/DashboardPage';
import PoliciesPage from './pages/PoliciesPage';
import ClaimsPage from './pages/ClaimsPage';
import NotificationsPage from './pages/NotificationsPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminVerificationPage from './pages/AdminVerificationPage';
import AdminClaimsPage from './pages/AdminClaimsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/policies" element={<PoliciesPage />} />
        <Route path="/claims" element={<ClaimsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/admin-verification" element={<AdminVerificationPage />} />
        <Route path="/admin-claims" element={<AdminClaimsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
