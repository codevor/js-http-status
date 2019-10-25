import validateHttpStatus from '../validate-http-status';

/**
 * @module isNotModified
 * @description
 * Validate HTTP Status code 304 type REDIRECTION
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 304
 */
function isNotModified(statusCode) {
  return validateHttpStatus(statusCode, 304);
}

export default isNotModified;
