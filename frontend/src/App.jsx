import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Header from './components/shared/Header'
import ProtectedRoute from './components/shared/ProtectedRoute'
import './App.css'

// Auth pages
import Landing from './pages/Landing'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'

// Dashboards
import MemberDashboard from './pages/member/Dashboard'
import AdminDashboard from './pages/admin/Dashboard'
import TrainerDashboard from './pages/trainer/Dashboard'

// Legacy pages (keeping for reference)
import TrainerPage from './pages/TrainerPage'
import AdminPage from './pages/AdminPage'
import MemberPage from './pages/MemberPage'
import MembershipPurchasePage from './pages/MembershipPurchasePage'

function App() {
  return (
    <AuthProvider>
      <div className="app-container">
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Member Routes */}
          <Route
            path="/member"
            element={
              <ProtectedRoute requiredRole="member">
                <MemberDashboard />
              </ProtectedRoute>
            }
          />

          {/* Protected Admin Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Protected Trainer Routes */}
          <Route
            path="/trainer"
            element={
              <ProtectedRoute requiredRole="trainer">
                <TrainerDashboard />
              </ProtectedRoute>
            }
          />

          {/* Legacy Routes (keeping for backward compatibility) */}
          <Route path="/legacy/trainer" element={<TrainerPage />} />
          <Route path="/legacy/admin" element={<AdminPage />} />
          <Route path="/legacy/member" element={<MemberPage />} />
          <Route path="/legacy/membership-purchase" element={<MembershipPurchasePage />} />
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
