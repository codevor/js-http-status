import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 444 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 444
 */
function isConnectionClosedWithoutResponse(statusCode) {
  return validateHttpStatus(statusCode, 444);
}

export default isConnectionClosedWithoutResponse;
