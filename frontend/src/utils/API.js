// import { apiConfig } from "./constants";

// class API {
//   constructor(config) {
//     this.headers = config.headers;
//     this.baseUrl = config.baseUrl;
//   }

//   _checkResponseStatus(response) {
//     if (response.ok) {
//       return response.json();
//     }
//     return Promise.reject(`Error: ${response.status}`);
//   }

//   getUserInfo() {
//     return fetch(`${this.baseUrl}/users/me`, {
//       method: "GET",
//       headers: this.headers,
//     }).then((res) => this._checkResponseStatus(res));
//   }

//   editUserInfo(data) {
//     return fetch(`${this.baseUrl}/users/me`, {
//       method: "PATCH",
//       headers: this.headers,
//       body: JSON.stringify({
//         name: data.name,
//         about: data.about,
//       }),
//     }).then((res) => this._checkResponseStatus(res));
//   }

//   createCard(card) {
//     return fetch(`${this.baseUrl}/cards`, {
//       method: "POST",
//       headers: this.headers,
//       body: JSON.stringify(card),
//     }).then((res) => this._checkResponseStatus(res));
//   }

//   deleteCard(id) {
//     return fetch(`${this.baseUrl}/cards/${id}`, {
//       method: "DELETE",
//       headers: this.headers,
//     }).then((res) => this._checkResponseStatus(res));
//   }

//   getCardsList() {
//     return fetch(`${this.baseUrl}/cards`, {
//       method: "GET",
//       headers: this.headers,
//     }).then((res) => this._checkResponseStatus(res));
//   }

//   changeLikeCardStatus(id, isLiked) {
//     if (isLiked) {
//       return fetch(`${this.baseUrl}/cards/${id}/likes`, {
//         method: "PUT",
//         headers: this.headers,
//       }).then((res) => this._checkResponseStatus(res));
//     }
//     return fetch(`${this.baseUrl}/cards/${id}/likes`, {
//       method: "DELETE",
//       headers: this.headers,
//     }).then((res) => this._checkResponseStatus(res));
//   }

//   updateAvatar(data) {
//     return fetch(`${this.baseUrl}/users/me/avatar`, {
//       method: "PATCH",
//       headers: this.headers,
//       body: JSON.stringify({
//         avatar: data.avatar,
//       }),
//     }).then((res) => this._checkResponseStatus(res));
//   }
// }

// export const api = new API(apiConfig);

export default class Api {
  constructor(object) {
    this._baseUrl = object.baseUrl;
    this._headers = object.headers;
  }

  // _createPromise(url, method, body) {
  //   return fetch(`${this._baseUrl}${url}`, {
  //     method: `${method}`,
  //     headers: {...this._headers, authorization: `Bearer ${localStorage.getItem('jwt')}`},
  //     body: body,
  //     credentials: 'include',
  //   }).then((res) => {
  //     if (res.ok) {
  //       return res.json();
  //     }
  //     return Promise.reject(`Ошибка: ${res.status}`);
  //   });
  // }

  _createPromise(url, method, body) {
    return fetch(`${this._baseUrl}${url}`, {
      method: `${method}`,
      headers: {...this._headers},
      body: body,
      credentials: 'include',
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  
  getUserInfo() {
    return this._createPromise('/users/me', 'GET');
  }
  
  editUserInfo(data) {
    return this._createPromise(
      '/users/me',
      'PATCH',
      JSON.stringify({
        name: `${data.name}`,
        about: `${data.about}`,
      }),
    );
  }

  createCard(data) {
    return this._createPromise(
      '/cards',
      'POST',
      JSON.stringify({
        name: `${data.name}`,
        link: `${data.link}`,
      }),
    );
  }

  deleteCard(id) {
    return this._createPromise('/cards/' + id, 'DELETE');
  }

  getCardsList() {
    return this._createPromise('/cards', 'GET');
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return this._createPromise('/cards/' + id + '/likes', 'PUT');
    }
    return this._createPromise('/cards/' + id + '/likes', 'DELETE');
  }
  
  updateAvatar(data) {
    return this._createPromise(
      '/users/me/avatar',
      'PATCH',
      JSON.stringify({
        avatar: `${data.avatar}`,
      }),
    );
  }
}

export const api = new Api({
  baseUrl: 'http://api.mesto-russia.nomoredomains.monster',
  headers: {
    'Content-Type': 'application/json',
  },
});