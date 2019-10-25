import validateHttpStatus from '../validate-http-status';

/**
 * @module isOk
 * @description
 * Validate HTTP Status code 200 type SUCCESS
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 200
 */
function isOk(statusCode) {
  return validateHttpStatus(statusCode, 200);
}

export default isOk;
