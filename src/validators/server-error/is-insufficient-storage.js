import validateHttpStatus from '../validate-http-status';

/**
 * @module isInsufficientStorage
 * @description
 * Validate HTTP Status code 507 type SERVER ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 507
 */
function isInsufficientStorage(statusCode) {
  return validateHttpStatus(statusCode, 507);
}

export default isInsufficientStorage;
