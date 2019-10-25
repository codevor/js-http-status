/** * @category Errors
 * @description
 * Throw exception type HTTPStatusError
 *
 * @param {String} message - Status error message
 */
class HTTPStatusError extends Error {
  constructor(message) {
    super(message);
    this.name = 'HTTPStatusError';
  }
}

export default HTTPStatusError;
