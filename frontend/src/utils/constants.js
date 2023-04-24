const apiConfig = {
  baseUrl: "https://api.mesto-russia.nomoredomains.monster",
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
    "Content-Type": "application/json",
  },
};

export { apiConfig };