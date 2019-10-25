import validateHttpStatus from '../validate-http-status';

/**
 * @module isImTeapot
 * @description
 * Validate HTTP Status code 418 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 418
 */
function isImTeapot(statusCode) {
  return validateHttpStatus(statusCode, 418);
}

export default isImTeapot;
