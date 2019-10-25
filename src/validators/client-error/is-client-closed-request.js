import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 499 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 499
 */
function isClientClosedRequest(statusCode) {
  return validateHttpStatus(statusCode, 499);
}

export default isClientClosedRequest;
