const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

const checkResponseStatus = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Error: ${response.status}`);
};

export const signUp = async (data) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    credentials: 'include',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return checkResponseStatus(res);
};

export const signIn = async (data) => {
  const res = await fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: 'include',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return checkResponseStatus(res);
};

export const checkAuth = async (token) => {
  const res = await fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return checkResponseStatus(res);
};
