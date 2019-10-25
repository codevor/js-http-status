import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 208 type SUCCESS
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError} When the statusCode is different then 208
 */
function isAlreadyReported(statusCode) {
  return validateHttpStatus(statusCode, 208);
}

export default isAlreadyReported;
