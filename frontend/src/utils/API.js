export default class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }
  
  _makePromise(url, method, body) {
    return fetch(`${this._baseUrl}${url}`, {
      method: `${method}`,
      headers: {...this._headers, authorization: `Bearer ${localStorage.getItem('jwt')}`},
      body: body,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getUserInfo() {
    return this._makePromise('/users/me', 'GET');
  }

  getCardsList() {
    return this._makePromise('/cards', 'GET');
  }

  editUserInfo(data) {
    return this._makePromise(
      '/users/me',
      'PATCH',
      JSON.stringify({
        name: `${data.name}`,
        about: `${data.about}`,
      }),
    );
  }

  updateAvatar(data) {
    return this._makePromise(
      '/users/me/avatar',
      'PATCH',
      JSON.stringify({
        avatar: `${data.avatar}`,
      }),
    );
  }

  createCard(data) {
    return this._makePromise(
      '/cards',
      'POST',
      JSON.stringify({
        name: `${data.name}`,
        link: `${data.link}`,
      }),
    );
  }

  deleteCard(id) {
    return this._makePromise('/cards/' + id, 'DELETE');
  }

  changeLikeCardStatus(id, isLiked) {
    if (!isLiked) {
      return this._makePromise('/cards/' + id + '/likes', 'PUT');
    } 
    return this._makePromise('/cards/' + id + '/likes', 'DELETE');
  }
}

export const api = new Api({
  baseUrl: 'https://api.mesto-russia.nomoredomains.monster',
  headers: {
    'Content-Type': 'application/json',
  },
});