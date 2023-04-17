const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { celebrate, Joi, errors } = require('celebrate');

const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');
const { errorHandler } = require('./middlewares/errors');
const { NotFoundError } = require('./errors/index');
const { urlRegex } = require('./utils/constants');
const { requestLogger, errorLogger } = require('./middlewares/logger'); 

const app = express();
const PORT = 3000;

mongoose
  .connect('mongodb://127.0.0.1:27017/mestodb')
  .then(() => console.log('Connected'))
  .catch((error) => console.log(`Error during connection ${error}`));

app.use(bodyParser.json());
app.use(cookieParser());

const userCreateValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(urlRegex),
    email: Joi.string().required().email(),
    password: Joi.string().min(8).required(),
  }),
});

const userLoginValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  }),
});

app.use(requestLogger);

const allowedCors = [
  'http://mesto-russia.nomoredomains.monster',
  'https://mesto-russia.nomoredomains.monster',
  'http://localhost:3000',
];

app.use((req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'];
  const requestHeaders = req.headers['access-control-request-headers'];

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }

  next();
  return null;
});

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signup', userCreateValidation, createUser);

app.post('/signin', userLoginValidation, login);

app.use('/users', auth, userRouter);
app.use('/cards', auth, cardRouter);

app.use('*', (req, res, next) => {
  next(new NotFoundError('404. Такой страницы не существует.'));
});

app.use(errorLogger);

app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => console.log('Listening...'));
