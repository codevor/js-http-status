import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 502 type SERVER ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 502
 */
function isBadGateway(statusCode) {
  return validateHttpStatus(statusCode, 502);
}

export default isBadGateway;
