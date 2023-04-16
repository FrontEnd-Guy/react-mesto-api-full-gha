const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../errors');

const auth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return next(new UnauthorizedError('Необходима авторизация'));
  }
  try {
    const payload = jwt.verify(token, 'secret-key');
    req.user = payload;
    return next();
  } catch (error) {
    return next(new UnauthorizedError('Необходима авторизация'));
  }
};

module.exports = auth;
