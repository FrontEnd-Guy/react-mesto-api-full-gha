const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../errors');

// const auth = (req, res, next) => {
//   const token = req.cookies.jwt;
//   if (!token) {
//     return next(new UnauthorizedError('Необходима авторизация'));
//   }
//   try {
//     const payload = jwt.verify(token, 'secret-key');
//     req.user = payload;
//     return next();
//   } catch (error) {
//     return next(new UnauthorizedError('Необходима авторизация'));
//   }
// };

// module.exports = auth;

module.exports.auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError('Необходима авторизация');
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, 'secret-key');
  } catch (err) {
    next(new UnauthorizedError('Необходима авторизация'));
  }

  req.user = payload;

  next();
};
