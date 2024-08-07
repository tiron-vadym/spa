import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL;

export const register = (user) => axios.post(`${API_URL}/client/register/`, user);
export const login = (user) => axios.post(`${API_URL}/client/token/`, user);
export const getProfile = () => axios.get(`${API_URL}/client/me/`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});
