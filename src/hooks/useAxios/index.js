import axios from 'axios';
import { BACKEND_URL } from '../constants/backend';
import { asyncLocalStorage } from '../utils/localStorage';
const API_KEY = process.env.REACT_APP_API_KEY;

const useAxios = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    timeout: 30000
  });

  // Add a request interceptor
  api.interceptors.request.use(async (config) => {
    config.headers['x-tenant'] = window.location.hostname;
    const authToken = await asyncLocalStorage.getItem('authToken') ? JSON.parse(asyncLocalStorage.getItem('authToken')) : API_KEY;
    console.log('authToken', authToken);
    if (authToken) {
      const { token = process.env.REACT_APP_API_KEY } = authToken;
      config.headers.Authorization = `Bearer ${token}`; // authToken
    }
    return config;
  }, (error) => Promise.reject(error));

  return api;
};

export default useAxios;