import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 100 type INFORMATIONAL
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 100
 */
function isContinue(statusCode) {
  return validateHttpStatus(statusCode, 100);
}

export default isContinue;
