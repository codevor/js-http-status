import validateHttpStatus from '../validate-http-status';

/**
 * @module isLocked
 * @description
 * Validate HTTP Status code 423 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 423
 */
function isLocked(statusCode) {
  return validateHttpStatus(statusCode, 423);
}

export default isLocked;
