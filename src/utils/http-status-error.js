class HTTPStatusError extends Error {
  constructor(message) {
    super(message);
    this.name = 'HTTPStatusError';
  }
}

export default HTTPStatusError;
