import validateHttpStatus from '../validate-http-status';

/**
 * @module isServiceUnavailable
 * @description
 * Validate HTTP Status code 503 type SERVER ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 503
 */
function isServiceUnavailable(statusCode) {
  return validateHttpStatus(statusCode, 503);
}

export default isServiceUnavailable;
