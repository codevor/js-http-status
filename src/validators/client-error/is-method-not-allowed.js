import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 405 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 405
 */
function isMethodNotAllowed(statusCode) {
  return validateHttpStatus(statusCode, 405);
}

export default isMethodNotAllowed;
