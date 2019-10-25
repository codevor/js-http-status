import validateHttpStatus from '../validate-http-status';

/**
 * @module isPermanentRedirect
 * @description
 * Validate HTTP Status code 308 type REDIRECTION
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 308
 */
function isPermanentRedirect(statusCode) {
  return validateHttpStatus(statusCode, 308);
}

export default isPermanentRedirect;
