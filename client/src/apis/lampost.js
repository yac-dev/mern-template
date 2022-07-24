import axios from 'axios';
export const lampostAPI = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  mode: 'cors',
});
