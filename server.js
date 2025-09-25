// server.js
const mongoose = require('mongoose');
const app = require('./src/index');
const config = require('./src/config');
const logger = require('./src/util/logger');

// Koneksi ke MongoDB
mongoose.connect(config.mongoURI)
    .then(() => {
        logger.info('Connected to MongoDB');
        app.listen(config.port, () => {
            logger.info(`Server is running on port ${config.port}`);
        });
    })
    .catch((err) => {
        logger.error('Failed to connect to MongoDB', err);
        process.exit(1);
    });