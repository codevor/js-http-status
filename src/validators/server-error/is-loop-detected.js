import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 508 type SERVER ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 508
 */
function isLoopDetected(statusCode) {
  return validateHttpStatus(statusCode, 508);
}

export default isLoopDetected;
