import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5002';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// ✅ Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && token !== 'null' && token !== 'undefined') {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Handle 401 errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log('Unauthorized, removing token...');
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (credentials) => api.post('/api/auth/login', credentials),

  register: (studentData) => {
    return api.post('/api/auth/register', studentData);
  },

  // 📌 GET current profile
  getProfile: () => api.get('/api/auth/profile'),

  // 📌 UPDATE profile with FormData
  updateProfile: (profileData) =>
    api.put('/api/auth/profile/update', profileData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
};

export const healthCheck = () => api.get('/api/health');

export default api;
