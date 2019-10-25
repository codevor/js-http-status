import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 511 type SERVER ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 511
 */
function isNetworkAuthenticationRequired(statusCode) {
  return validateHttpStatus(statusCode, 511);
}

export default isNetworkAuthenticationRequired;
