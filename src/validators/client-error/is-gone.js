import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 410 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 410
 */
function isGone(statusCode) {
  return validateHttpStatus(statusCode, 410);
}

export default isGone;
