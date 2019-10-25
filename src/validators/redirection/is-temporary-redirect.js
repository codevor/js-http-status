import validateHttpStatus from '../validate-http-status';

/**
 * @module isTemporaryRedirect
 * @description
 * Validate HTTP Status code 307 type REDIRECTION
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 307
 */
function isTemporaryRedirect(statusCode) {
  return validateHttpStatus(statusCode, 307);
}

export default isTemporaryRedirect;
