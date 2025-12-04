import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, User } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, userRole, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const getRoleRoute = () => {
    if (!userRole) return '/';
    return `/${userRole}`;
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl hover:opacity-80 transition">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-indigo-600 font-black">💪</span>
            </div>
            <span>FitTrack</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {currentUser ? (
              <>
                <Link
                  to={getRoleRoute()}
                  className="hover:text-gray-200 transition flex items-center gap-2"
                >
                  <User size={18} />
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-gray-200 transition">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            className="md:hidden pb-4 space-y-2"
          >
            {currentUser ? (
              <>
                <Link
                  to={getRoleRoute()}
                  className="block py-2 hover:bg-white hover:bg-opacity-10 px-4 rounded transition"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block py-2 hover:bg-white hover:bg-opacity-10 px-4 rounded transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block py-2 bg-white text-indigo-600 px-4 rounded font-semibold"
                >
                  Sign Up
                </Link>
              </>
            )}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
