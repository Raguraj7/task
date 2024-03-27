import axios from 'axios';

export const Axios = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 7000,
});

Axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
    const auth = token ? `Bearer ${token}` : '';
    config.headers['Authorization'] = auth;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log('errrr', error);
    if (error.response.data.status === 401) {
      localStorage.removeItem('token');
    }
    return Promise.reject(error.response.data.message);
  }
);
