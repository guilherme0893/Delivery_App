const express = require('express');

const cors = require('cors');

const register = require('../routes/register');

const app = express();

app.use(cors());

app.use('/', express.json());

app.use(register);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
