// src/util/response.js
const sendSuccess = (res, data, message = 'Success', statusCode = 200) => {
  res.status(statusCode).json({
    code: statusCode,
    status: 'success',
    message,
    data,
  });
};

const sendError = (res, message = 'Internal Server Error', statusCode = 500, error = null) => {
  res.status(statusCode).json({
    code: statusCode,
    status: 'error',
    message,
    error,
  });
};

module.exports = {
  sendSuccess,
  sendError,
};