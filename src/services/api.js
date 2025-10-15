import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5002';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && token !== 'null' && token !== 'undefined') {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log('Unauthorized, removing token...');
      localStorage.removeItem('token');
      // Don't redirect here to avoid conflicts with React Router
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (credentials) => api.post('/api/auth/login', credentials),
  register: (studentData) => {
    // Remove Content-Type for FormData to let browser set it automatically
    return api.post('/api/auth/register', studentData);
  },
  getProfile: () => api.get('/api/auth/profile'),
  updateProfile: (profileData) => {
    return api.put('/api/auth/profile', profileData);
  },
};

export const healthCheck = () => api.get('/api/health');

export default api;