import axios from 'axios';
import { BACKEND_URL } from '../constants/backend';
import useAuth from '../hooks/useAuth';
import { asyncLocalStorage } from '../utils/localStorage';
const API_KEY = process.env.REACT_APP_API_KEY;

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


// api.interceptors.response.use(undefined, async (error) => {
//   const errorResponse =  error.response;
//   if (errorResponse && errorResponse.status === 401 && !!error.config &&  typeof error.config.canRetry  === 'undefined' ) {
//     const authToken = await asyncLocalStorage.getItem('authToken') ? JSON.parse(asyncLocalStorage.getItem('authToken')) : null;
//     if (authToken) {
//       const { token = process.env.REACT_APP_API_KEY } = user;
//       error.config.headers.Authorization = `Bearer ${token}`; // authToken
//       error.config.canRetry = false;
//       return api.axiosInstance.request(error.config)
//     }
//   }
//   throw error;
// })

export default api;