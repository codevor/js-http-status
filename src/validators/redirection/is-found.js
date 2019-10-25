import validateHttpStatus from '../validate-http-status';

/**
 * @module isFound
 * @description
 * Validate HTTP Status code 302 type REDIRECTION
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 302
 */
function isFound(statusCode) {
  return validateHttpStatus(statusCode, 302);
}

export default isFound;
