import validateHttpStatus from '../validate-http-status';

/**
 * @module isPartialContent
 * @description
 * Validate HTTP Status code 206 type SUCCESS
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError} When the statusCode is different then 206
 */
function isPartialContent(statusCode) {
  return validateHttpStatus(statusCode, 206);
}

export default isPartialContent;
