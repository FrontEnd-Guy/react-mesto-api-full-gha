const { DEFAULT_ERROR_MESSAGE, DEFAULT_ERROR_CODE } = require('../utils/constants');

/* eslint-disable no-unused-vars */
module.exports.errorHandler = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).json({
    message: statusCode === DEFAULT_ERROR_CODE ? DEFAULT_ERROR_MESSAGE : message,
  });
};
