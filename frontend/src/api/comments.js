import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL;

export const fetchComments = () => axios.get(`${API_URL}/service/comments/`);
export const createComment = (comment) => axios.post(`${API_URL}/service/comments/`, comment, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});
