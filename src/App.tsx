import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import { SubscriptionProvider } from './contexts/SubscriptionContext'
import MainLayout from './components/MainLayout'
import Dashboard from './pages/Dashboard'
import Prices from './pages/Prices'
import TermsOfService from './pages/TermsOfService'
import './index.css'

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
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
                  <MainLayout>
                    <Dashboard />
                  </MainLayout>
                </SubscriptionProvider>
              </ProtectedRoute>
            }
          />
          <Route
            path="/prices"
            element={
              <ProtectedRoute>
                <SubscriptionProvider>
                  <MainLayout>
                    <Prices />
                  </MainLayout>
                </SubscriptionProvider>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
    </HashRouter>
  )
}

export default App
