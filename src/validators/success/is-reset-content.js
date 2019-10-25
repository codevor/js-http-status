import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 205 type SUCCESS
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError} When the statusCode is different then 205
 */
function isResetContent(statusCode) {
  return validateHttpStatus(statusCode, 205);
}

export default isResetContent;
