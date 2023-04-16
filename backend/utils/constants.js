const DEFAULT_ERROR_CODE = 500;
const NOT_FOUND_ERROR_CODE = 404;
const VALIDATION_ERROR_CODE = 400;

const DEFAULT_ERROR_MESSAGE = 'На сервере произошла ошибка';

const NOT_FOUND_USER_ERROR_MESSAGE = 'Пользователь по указанному _id не найден';
const VALIDATION_USER_CREATE_ERROR_MESSAGE = 'Переданы некорректные данные при создании пользователя';
const VALIDATION_USER_INFO_ERROR_MESSAGE = 'Переданы некорректные данные при обновлении профиля';
const VALIDATION_USER_AVATAR_ERROR_MESSAGE = 'Переданы некорректные данные при обновлении аватара';
const VALIDATION_USER_ID_ERROR_MESSAGE = 'Передан несуществующий _id пользователя';

const NOT_FOUND_CARD_ERROR_MESSAGE = 'Карточка с указанным _id не найдена';
const VALIDATION_CARD_CREATE_ERROR_MESSAGE = 'Переданы некорректные данные при создании карточки';
const VALIDATION_CARD_LIKE_ERROR_MESSAGE = 'Переданы некорректные данные для постановки/снятии лайка';
const VALIDATION_CARD_ID_ERROR_MESSAGE = 'Передан несуществующий _id карточки';

const AUTH_ERROR_MESSAGE = 'Неправильная почта или пароль';

const urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}[-a-zA-Z0-9@:%_+.~#?&//=]*$/;

module.exports = {
  DEFAULT_ERROR_CODE,
  NOT_FOUND_ERROR_CODE,
  VALIDATION_ERROR_CODE,
  DEFAULT_ERROR_MESSAGE,
  NOT_FOUND_USER_ERROR_MESSAGE,
  VALIDATION_USER_CREATE_ERROR_MESSAGE,
  VALIDATION_USER_INFO_ERROR_MESSAGE,
  VALIDATION_USER_AVATAR_ERROR_MESSAGE,
  VALIDATION_USER_ID_ERROR_MESSAGE,
  NOT_FOUND_CARD_ERROR_MESSAGE,
  VALIDATION_CARD_CREATE_ERROR_MESSAGE,
  VALIDATION_CARD_LIKE_ERROR_MESSAGE,
  VALIDATION_CARD_ID_ERROR_MESSAGE,
  AUTH_ERROR_MESSAGE,
  urlRegex,
};
