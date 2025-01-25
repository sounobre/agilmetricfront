import axios from 'axios';

const api = axios.create({
  baseURL: 'https://agilmetricback-production.up.railway.app/api',
});

export default api;
