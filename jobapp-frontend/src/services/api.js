// src/services/api.js
import axios from 'axios';

// Create an axios instance for all API calls
const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Base path for Spring Boot backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: attach JWT token from localStorage to every request
api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user')); // Stored user info
    const token = user?.token;

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
