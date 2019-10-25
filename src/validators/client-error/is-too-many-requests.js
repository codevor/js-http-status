import validateHttpStatus from '../validate-http-status';

/**
 * @module isTooManyRequests
 * @description
 * Validate HTTP Status code 429 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 429
 */
function isTooManyRequests(statusCode) {
  return validateHttpStatus(statusCode, 429);
}

export default isTooManyRequests;
