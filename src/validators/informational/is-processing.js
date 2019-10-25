import validateHttpStatus from '../validate-http-status';

/**
 * @module isProcessing
 * @description
 * Validate HTTP Status code 102 type INFORMATIONAL
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 102
 */
function isProcessing(statusCode) {
  return validateHttpStatus(statusCode, 102);
}

export default isProcessing;
