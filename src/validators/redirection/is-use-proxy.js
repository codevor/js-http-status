import validateHttpStatus from '../validate-http-status';

/**
 * @module isUseproxy
 * @description
 * Validate HTTP Status code 305 type REDIRECTION
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 305
 */
function isUseproxy(statusCode) {
  return validateHttpStatus(statusCode, 305);
}

export default isUseproxy;
