import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import AdminDashboard from './pages/AdminDashboard'
import TrainerDashboard from './pages/TrainerDashboard'

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/trainer" element={<TrainerDashboard />} />
        
        {/* Home Route */}
        <Route path="/" element={
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="text-center text-white">
              <h1 className="text-6xl font-bold mb-4">🏋️ Gym Tracking System</h1>
              <p className="text-2xl mb-8">Track Your Fitness Journey</p>
              <div className="space-x-4">
                <Link to="/login" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                  Login
                </Link>
                <Link to="/signup" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        } />
      </Routes>
    </div>
  )
}

export default App
