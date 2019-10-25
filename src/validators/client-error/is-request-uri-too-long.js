import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 414 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 414
 */
function isRequestUriTooLong(statusCode) {
  return validateHttpStatus(statusCode, 414);
}

export default isRequestUriTooLong;
