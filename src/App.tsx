import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import { SubscriptionProvider } from './contexts/SubscriptionContext'
import Dashboard from './pages/Dashboard'
import Prices from './pages/Prices'
import TermsOfService from './pages/TermsOfService'
import './index.css'

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <SubscriptionProvider>
                  <Dashboard />
                </SubscriptionProvider>
              </ProtectedRoute>
            }
          />
          <Route
            path="/prices"
            element={
              <ProtectedRoute>
                <SubscriptionProvider>
                  <Prices />
                </SubscriptionProvider>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  )
}

export default App
