const apiConfig = {
  baseUrl: "http://localhost:3000",
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
    "Content-Type": "application/json",
  },
};

export { apiConfig };
