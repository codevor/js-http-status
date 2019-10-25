import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 409 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 409
 */
function isConflict(statusCode) {
  return validateHttpStatus(statusCode, 409);
}

export default isConflict;
