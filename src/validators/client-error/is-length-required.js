import validateHttpStatus from '../validate-http-status';

/**
 * @module isLengthRequired
 * @description
 * Validate HTTP Status code 411 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 411
 */
function isLengthRequired(statusCode) {
  return validateHttpStatus(statusCode, 411);
}

export default isLengthRequired;
