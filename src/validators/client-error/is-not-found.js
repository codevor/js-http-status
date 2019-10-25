import validateHttpStatus from '../validate-http-status';

/**
 * @module isNotFound
 * @description
 * Validate HTTP Status code 404 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 404
 */
function isNotFound(statusCode) {
  return validateHttpStatus(statusCode, 404);
}

export default isNotFound;
