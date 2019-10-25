import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 500 type SERVER ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 500
 */
function isInternalServerError(statusCode) {
  return validateHttpStatus(statusCode, 500);
}

export default isInternalServerError;
