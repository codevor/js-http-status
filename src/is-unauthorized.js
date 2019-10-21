import validateHttpStatus from './utils/validate-http-status';

/**
 * @module isUnauthorized
 * @description
 * Validate HTTP Status code 401 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 401
 */
function isUnauthorized(statusCode) {
  return validateHttpStatus(statusCode, 401);
}

export default isUnauthorized;
