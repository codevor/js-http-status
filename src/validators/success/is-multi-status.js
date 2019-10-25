import validateHttpStatus from '../validate-http-status';

/**
 * @module isMultiStatus
 * @description
 * Validate HTTP Status code 207 type SUCCESS
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError} When the statusCode is different then 207
 */
function isMultiStatus(statusCode) {
  return validateHttpStatus(statusCode, 207);
}

export default isMultiStatus;
