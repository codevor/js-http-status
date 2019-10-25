import validateHttpStatus from '../validate-http-status';

/**
 * @module isRequestHeaderFieldsTooLarge
 * @description
 * Validate HTTP Status code 431 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 431
 */
function isRequestHeaderFieldsTooLarge(statusCode) {
  return validateHttpStatus(statusCode, 431);
}

export default isRequestHeaderFieldsTooLarge;
