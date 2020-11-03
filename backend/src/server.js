// -----------------------------
// File: src/index.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 29/10/2020
// Brief: GitHub Repository Organizer
// -----------------------------

// -----------------------------
// load env vars to server the application
require('dotenv').config();

// -----------------------------
// External libs
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Internal libs
const api = require('./api');
const config = require('./config');

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.use(cors());

app.use(api);

app.listen(config.httpPort, () => console.log(`Server up and running on port: ${config.httpPort}`));
