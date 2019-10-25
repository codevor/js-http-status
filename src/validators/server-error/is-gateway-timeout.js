import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 504 type SERVER ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 504
 */
function isGatewayTimeout(statusCode) {
  return validateHttpStatus(statusCode, 504);
}

export default isGatewayTimeout;
