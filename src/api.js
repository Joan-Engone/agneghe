import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', 
  withCredentials: true // ✅ This allows cookies to be sent automatically!
});

export default api;