import React, { createContext, useState, useContext, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log('Checking auth status, token exists:', !!token);
      
      if (token && token !== 'null' && token !== 'undefined') {
        console.log('Token found, verifying with server...');
        const response = await authAPI.getProfile();
        console.log('Profile response:', response.data);
        setUser(response.data.data.student);
      } else {
        console.log('No valid token found');
        setUser(null);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      // Only remove token if it's an authentication error
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
      }
      setUser(null);
    } finally {
      setLoading(false);
      console.log('Auth check completed, loading:', false);
    }
  };

  const login = async (email, password) => {
    try {
      setError('');
      const response = await authAPI.login({ email, password });
      
      if (response.data.success) {
        const { student, token } = response.data.data;
        
        localStorage.setItem('token', token);
        setUser(student);
        
        return { success: true };
      } else {
        setError(response.data.message || 'Login failed');
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed. Please try again.';
      setError(message);
      return { success: false, message };
    }
  };

  const register = async (formData) => {
    try {
      setError('');
      const response = await authAPI.register(formData);
      
      if (response.data.success) {
        const { student, token } = response.data.data;
        
        localStorage.setItem('token', token);
        setUser(student);
        
        return { success: true };
      } else {
        setError(response.data.message || 'Registration failed');
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Registration failed. Please try again.';
      setError(message);
      return { success: false, message };
    }
  };

  const updateProfile = async (formData) => {
    try {
      setError('');
      const response = await authAPI.updateProfile(formData);
      
      if (response.data.success) {
        setUser(response.data.data.student);
        return { success: true };
      } else {
        setError(response.data.message || 'Profile update failed');
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Profile update failed. Please try again.';
      setError(message);
      return { success: false, message };
    }
  };

  const logout = () => {
    console.log('Logging out...');
    localStorage.removeItem('token');
    setUser(null);
    setError('');
  };

  const clearError = () => setError('');

  const value = {
    user,
    loading,
    error,
    login,
    register,
    updateProfile,
    logout,
    clearError,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};