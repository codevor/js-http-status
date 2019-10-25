import validateHttpStatus from '../validate-http-status';

/**
 * @module isProxyAuthenticationRequired
 * @description
 * Validate HTTP Status code 407 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 407
 */
function isProxyAuthenticationRequired(statusCode) {
  return validateHttpStatus(statusCode, 407);
}

export default isProxyAuthenticationRequired;
