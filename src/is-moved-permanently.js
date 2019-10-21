import validateHttpStatus from './utils/validate-http-status';

/**
 * @module isMovedPermanently
 * @description
 * Validate HTTP Status code 301 type REDIRECTION
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 301
 */
function isMovedPermanently(statusCode) {
  return validateHttpStatus(statusCode, 301);
}

export default isMovedPermanently;
