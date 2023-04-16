class InvalidError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

module.exports = InvalidError;
