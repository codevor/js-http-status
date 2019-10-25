import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 400 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 400
 */
function isBadRequest(statusCode) {
  return validateHttpStatus(statusCode, 400);
}

export default isBadRequest;
