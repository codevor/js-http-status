import validateHttpStatus from '../validate-http-status';

/**
 * @module isMisdirectedRequest
 * @description
 * Validate HTTP Status code 421 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 421
 */
function isMisdirectedRequest(statusCode) {
  return validateHttpStatus(statusCode, 421);
}

export default isMisdirectedRequest;
