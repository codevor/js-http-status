import validateHttpStatus from '../validate-http-status';

/**
 * @module isSwitchingProtocols
 * @description
 * Validate HTTP Status code 101 type INFORMATIONAL
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 101
 */
function isSwitchingProtocols(statusCode) {
  return validateHttpStatus(statusCode, 101);
}

export default isSwitchingProtocols;
