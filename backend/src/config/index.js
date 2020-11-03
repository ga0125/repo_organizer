// -----------------------------
// File: src/routes.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 29/10/2020
// Brief: Routes configuration values
// -----------------------------

const config = {
  // --------------------------------------
  // Service ports
  httpPort: process.env.SERVICE_PORT || 3000,
  httpClient: process.env.CLIENT_URL,
  githubApp: {
    client_id: process.env.GITHUB_CLIENT_ID,
    secret_key: process.env.GITHUB_SECRET_KEY,
  },
};

module.exports = config;
