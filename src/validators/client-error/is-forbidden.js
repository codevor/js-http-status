import validateHttpStatus from '../validate-http-status';

/**
 * @module isForbidden
 * @description
 * Validate HTTP Status code 403 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 403
 */
function isForbidden(statusCode) {
  return validateHttpStatus(statusCode, 403);
}

export default isForbidden;
