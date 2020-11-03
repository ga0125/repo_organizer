const axios = require('axios');

const apiInstance = axios.create({
  baseURL: process.env.SERVER_URL,
  headers: {
    common: {
      Accept: 'application/vnd.github.v4.idl',
    },
  },
  /* other custom settings */
});

module.exports = apiInstance;
