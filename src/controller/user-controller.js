// src/controller/user-controller.js
const userService = require('../service/user-service');
const { sendSuccess, sendError } = require('../util/response');
const logger = require('../util/logger');

const register = async (req, res) => {
  try {
    const user = await userService.registerUser(req.body);
    const userResponse = { guid: user.guid, email: user.email };
    sendSuccess(res, userResponse, 'User registered successfully', 201);
  } catch (error) {
    logger.error(error);
    sendError(res, error.message, 400);
  }
};

const login = async (req, res) => {
  try {
    const { user, token } = await userService.loginUser(req.body);
    const userResponse = {
      id: user._id,
      email: user.email,
      token,
    };
    sendSuccess(res, userResponse, 'Login successful');
  } catch (error) {
    logger.error(error);
    sendError(res, error.message, 401);
  }
};

module.exports = {
  register,
  login,
};