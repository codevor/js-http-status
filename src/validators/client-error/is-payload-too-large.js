import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 413 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 413
 */
function isPayloadTooLarge(statusCode) {
  return validateHttpStatus(statusCode, 413);
}

export default isPayloadTooLarge;
