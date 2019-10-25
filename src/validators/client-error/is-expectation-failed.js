import validateHttpStatus from '../validate-http-status';

/**
 * @module isExpectationFailed
 * @description
 * Validate HTTP Status code 417 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 417
 */
function isExpectationFailed(statusCode) {
  return validateHttpStatus(statusCode, 417);
}

export default isExpectationFailed;
