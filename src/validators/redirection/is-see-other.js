import validateHttpStatus from '../validate-http-status';

/**
 * @module isSeeOther
 * @description
 * Validate HTTP Status code 303 type REDIRECTION
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 303
 */
function isSeeOther(statusCode) {
  return validateHttpStatus(statusCode, 303);
}

export default isSeeOther;
