// src/route/index.js
const express = require('express');
const router = express.Router();

const studentRoutes = require('./student');
const userRoutes = require('./user');

// URL base untuk setiap route
router.use('/students', studentRoutes);
router.use('/users', userRoutes);

module.exports = router;