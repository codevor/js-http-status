import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 202 type SUCCESS
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError} When the statusCode is different then 202
 */
function isAccepted(statusCode) {
  return validateHttpStatus(statusCode, 202);
}

export default isAccepted;
