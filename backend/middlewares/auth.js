const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../errors');

const auth = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) {
    return next(new UnauthorizedError('Необходима авторизация'));
  }

  const token = header.split(' ')[1];
  if (!token) {
    return next(new UnauthorizedError('Необходима авторизация'));
  }
  try {
    const JWT_SECRET = process.env.NODE_ENV !== 'production' ? 'development-secret-key' : process.env.JWT_SECRET;
    const payload = jwt.verify(token, JWT_SECRET);
    // const payload = jwt.verify(token, 'secret-key');
    req.user = payload;
    return next();
  } catch (error) {
    return next(new UnauthorizedError('Необходима авторизация'));
  }
};

module.exports = auth;
