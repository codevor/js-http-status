import validateHttpStatus from '../validate-http-status';

/**
 * @module isNotExtended
 * @description
 * Validate HTTP Status code 510 type SERVER ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 510
 */
function isNotExtended(statusCode) {
  return validateHttpStatus(statusCode, 510);
}

export default isNotExtended;
