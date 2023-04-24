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
//     return response.text().then((text) => {
//       throw new Error(`Status: ${response.status}, Message: ${text}`);
//     });
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
//     if (!isLiked) {
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