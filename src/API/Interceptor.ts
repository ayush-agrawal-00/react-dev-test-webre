import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const baseURL2 ='https://5b5fc7d84dca409dbe08062a5b973aa2.api.mockbin.io'
const axiosInstance: AxiosInstance = axios.create({
  baseURL: window.location.pathname ==='/'?baseURL2:BASE_URL,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig):any => {
    // You can modify headers, add tokens, or perform other request modifications here
    // config.headers.Authorization = `Bearer ${yourToken}`;
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // You can do data transformation or other tasks before sending the response to the calling function
    return response;
  },
  (error: AxiosError) => {
    // You can handle errors globally here
    if (error.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      console.error('Response error:', error.response.data);
      console.error('Status:', error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Request error:', error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
