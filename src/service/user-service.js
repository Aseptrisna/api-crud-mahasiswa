// src/service/user-service.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/users-model');
const config = require('../config');
const { v4: uuidv4 } = require('uuid');

const registerUser = async (userData) => {
    // Hash password sebelum disimpan
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const year = new Date().getFullYear();
    const guid = `USER-${uuidv4()}-${year}`;
    const user = new User({
        guid,
        email: userData.email,
        password: hashedPassword,
        nama: userData.nama,
        telp: userData.telp,
        jenis_kelamin: userData.jenis_kelamin
    });
    return await user.save();
};

const loginUser = async (userData) => {
    const user = await User.findOne({ email: userData.email });
    if (!user) {
        throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(userData.password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid password');
    }

    // Buat token JWT
    const token = jwt.sign({ id: user._id, email: user.email }, config.jwtSecret, { expiresIn: '24h' });
    return { user, token };
};

module.exports = {
    registerUser,
    loginUser,
};