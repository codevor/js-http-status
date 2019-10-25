import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 451 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 451
 */
function isUnavailableForLegalReasons(statusCode) {
  return validateHttpStatus(statusCode, 451);
}

export default isUnavailableForLegalReasons;
