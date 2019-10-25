import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 203 type SUCCESS
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError} When the statusCode is different then 203
 */
function isNonAuthoritativeInformation(statusCode) {
  return validateHttpStatus(statusCode, 203);
}

export default isNonAuthoritativeInformation;
