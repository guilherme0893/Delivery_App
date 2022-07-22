const express = require('express');

const cors = require('cors');

const register = require('../routes/register');
const product = require('../routes/product');
const login = require('../routes/login');
const checkout = require('../routes/checkout');

const app = express();
app.use(cors());
app.use(express.static('public'));

app.use('/', express.json());

app.use(login);
app.use(register);
app.use(product);
app.use(checkout);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
