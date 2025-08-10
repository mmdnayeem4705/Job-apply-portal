import api from './api';

export const registerUser = (userData) => api.post('/auth/register', userData);
export const loginUser = (loginData) => api.post('/auth/login', loginData);
export const getProfile = () => api.get('/user/profile'); // example protected route

export const updateProfile = (profileData) => api.put('/user/profile', profileData);
export const changePassword = (passwordData) => api.put('/user/change-password', passwordData