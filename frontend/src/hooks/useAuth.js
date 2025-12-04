import { useContext } from 'react';
// Using Mock Auth for demo (no Firebase needed)
import { AuthContext } from '../context/MockAuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
