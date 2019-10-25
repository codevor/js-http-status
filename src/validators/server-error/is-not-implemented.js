import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 501 type SERVER ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 501
 */
function isNotImplemented(statusCode) {
  return validateHttpStatus(statusCode, 501);
}

export default isNotImplemented;
