import axios from 'axios';

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    common: {
      ContentType: 'application/json',
    },
  },
});

export default apiInstance;
