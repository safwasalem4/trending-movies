import axios from 'axios';

export const BaseUrlInterceptor = (baseURL: string) => {
  axios.interceptors.request.use(config => {
    config.baseURL = baseURL;

    return config;
  });
};