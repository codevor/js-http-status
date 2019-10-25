import validateHttpStatus from '../validate-http-status';

/**
 * @module isRequestTimeout
 * @description
 * Validate HTTP Status code 408 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 408
 */
function isRequestTimeout(statusCode) {
  return validateHttpStatus(statusCode, 408);
}

export default isRequestTimeout;
