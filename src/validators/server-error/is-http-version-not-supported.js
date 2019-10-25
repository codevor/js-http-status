import validateHttpStatus from '../validate-http-status';

/**
 * @module isHttpVersionNotSupported
 * @description
 * Validate HTTP Status code 505 type SERVER ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 504
 */
function isHttpVersionNotSupported(statusCode) {
  return validateHttpStatus(statusCode, 505);
}

export default isHttpVersionNotSupported;
