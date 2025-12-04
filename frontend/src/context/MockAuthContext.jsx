import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check for existing session in localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('mockUser');
    const savedRole = localStorage.getItem('mockRole');
    
    if (savedUser && savedRole) {
      setCurrentUser(JSON.parse(savedUser));
      setUserRole(savedRole);
    }
    setLoading(false);
  }, []);

  // Mock Signup function
  const signup = async (email, password, fullName, role = 'member') => {
    try {
      setError(null);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Create mock user
      const mockUser = {
        uid: `mock-${Date.now()}`,
        email: email,
        displayName: fullName,
        createdAt: new Date().toISOString(),
      };

      // Save to localStorage (simulating database)
      const users = JSON.parse(localStorage.getItem('mockUsers') || '[]');
      
      // Check if user already exists
      if (users.some(u => u.email === email)) {
        throw new Error('Email already in use');
      }
      
      users.push({ ...mockUser, role, password });
      localStorage.setItem('mockUsers', JSON.stringify(users));
      localStorage.setItem('mockUser', JSON.stringify(mockUser));
      localStorage.setItem('mockRole', role);

      setCurrentUser(mockUser);
      setUserRole(role);
      
      console.log('✅ Mock signup successful:', email, role);
      return mockUser;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Mock Login function
  const login = async (email, password) => {
    try {
      setError(null);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('mockUsers') || '[]');
      const user = users.find(u => u.email === email && u.password === password);
      
      if (!user) {
        throw new Error('Invalid email or password');
      }

      const mockUser = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      };

      localStorage.setItem('mockUser', JSON.stringify(mockUser));
      localStorage.setItem('mockRole', user.role);

      setCurrentUser(mockUser);
      setUserRole(user.role);
      
      console.log('✅ Mock login successful:', email, user.role);
      return { user: mockUser, role: user.role };
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Mock Logout function
  const logout = async () => {
    try {
      setError(null);
      localStorage.removeItem('mockUser');
      localStorage.removeItem('mockRole');
      setCurrentUser(null);
      setUserRole(null);
      console.log('✅ Mock logout successful');
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const value = {
    currentUser,
    userRole,
    loading,
    error,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
