import validateHttpStatus from '../validate-http-status';

/**
 * @module isNotAcceptable
 * @description
 * Validate HTTP Status code 406 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 406
 */
function isNotAcceptable(statusCode) {
  return validateHttpStatus(statusCode, 406);
}

export default isNotAcceptable;
