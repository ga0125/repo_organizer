// -----------------------------
// File: src/routes.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 29/10/2020
// Brief: Routes application
// -----------------------------

// -----------------------------
// imports
const router = require('express').Router();

const listRepositories = require('../services/listRepositories');
const getRepository = require('../services/getRepository');

// -----------------------------
// Global constants
const API_VERSION_PATH = '/api/v1';

// -----------------------------
// GitHub authentication (OAuth2 method)
router.post(`${API_VERSION_PATH}/repositories/`, async (req, res) => {
  try {
    // -----------------------------
    // Get the requests parameters
    const languageType = req.body.language_type;
    const pageID = req.body.page_ID;

    // -----------------------------
    // Compose response according business rules
    const response = await listRepositories(languageType, pageID);

    await res.send(response);
  } catch (err) {
    await res.status(err.response.status).json({ message: err.message });
  }
});

// -----------------------------
// GitHub authentication (OAuth2 method)
router.post(`${API_VERSION_PATH}/repository/`, async (req, res) => {
  try {
    // -----------------------------
    // Get the requests parameters
    const { username } = req.body;

    // -----------------------------
    // Compose response according business rules
    const response = await getRepository(username);

    await res.send(response);
  } catch (err) {
    await res.status(err.response.status).json({ message: err.message });
  }
});

module.exports = router;
