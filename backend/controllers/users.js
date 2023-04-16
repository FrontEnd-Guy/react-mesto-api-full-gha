const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const {
  NOT_FOUND_USER_ERROR_MESSAGE,
  VALIDATION_USER_INFO_ERROR_MESSAGE,
  VALIDATION_USER_AVATAR_ERROR_MESSAGE,
  VALIDATION_USER_ID_ERROR_MESSAGE,
  VALIDATION_USER_CREATE_ERROR_MESSAGE,
  AUTH_ERROR_MESSAGE,
} = require('../utils/constants');

const {
  UnauthorizedError,
  ConflictError,
  InvalidError,
  NotFoundError,
} = require('../errors');

module.exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      throw new UnauthorizedError(AUTH_ERROR_MESSAGE);
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedError(AUTH_ERROR_MESSAGE);
    }
    const token = jwt.sign({ _id: user._id }, 'secret-key', { expiresIn: '7d' });
    return res.cookie('jwt', token, { httpOnly: true }).send({ message: 'Успешная авторизация' });
  } catch (error) {
    return next(error);
  }
};

module.exports.createUser = async (req, res, next) => {
  const {
    name, about, avatar, email, password,
  } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      about,
      avatar,
      email,
      password: hashedPassword,
    });
    const selectedUser = await User.findById(user._id).select('-password');
    return res.status(201).send(selectedUser);
  } catch (error) {
    if (error.code === 11000) {
      return next(new ConflictError('Пользователь с указанным email уже существует'));
    }
    if (error instanceof mongoose.Error.ValidationError) {
      return next(new InvalidError(VALIDATION_USER_CREATE_ERROR_MESSAGE));
    }
    return next(error);
  }
};

module.exports.getCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    return res.send(user);
  } catch (error) {
    return next(error);
  }
};

module.exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    return res.send(users);
  } catch (err) {
    return next(err);
  }
};

module.exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    if (user === null) {
      throw new NotFoundError(NOT_FOUND_USER_ERROR_MESSAGE);
    }
    return res.send(user);
  } catch (err) {
    if (err instanceof mongoose.Error.CastError) {
      return next(new InvalidError(VALIDATION_USER_ID_ERROR_MESSAGE));
    }
    return next(err);
  }
};

module.exports.updateUserInfo = async (req, res, next) => {
  try {
    const { name, about } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name, about },
      { new: true, runValidators: true },
    );
    return res.send(user);
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      return next(new InvalidError(VALIDATION_USER_INFO_ERROR_MESSAGE));
    }
    return next(err);
  }
};

module.exports.updateAvatar = async (req, res, next) => {
  try {
    const { avatar } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { avatar },
      { new: true, runValidators: true },
    );
    return res.send(user);
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      return next(new InvalidError(VALIDATION_USER_AVATAR_ERROR_MESSAGE));
    }
    return next(err);
  }
};
