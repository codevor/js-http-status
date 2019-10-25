import validateHttpStatus from '../validate-http-status';

/**
 * @module isImUsed
 * @description
 * Validate HTTP Status code 226 type SUCCESS
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError} When the statusCode is different then 226
 */
function isImUsed(statusCode) {
  return validateHttpStatus(statusCode, 226);
}

export default isImUsed;
