// index.js
const express = require('express');
const mainRouter = require('./route');
const logger = require('./util/logger');

const app = express();

// Middleware untuk parsing body JSON
app.use(express.json());

// Menggunakan router utama
app.use('/api', mainRouter);

// Welcome route
app.get('/', (req, res) => {
    res.send('Welcome to the Student CRUD API!');
});

module.exports = app;