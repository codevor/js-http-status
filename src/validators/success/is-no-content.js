import validateHttpStatus from '../validate-http-status';

/**
 * @module isNoContent
 * @description
 * Validate HTTP Status code 204 type SUCCESS
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError} When the statusCode is different then 204
 */
function isNoContent(statusCode) {
  return validateHttpStatus(statusCode, 204);
}

export default isNoContent;
