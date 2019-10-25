import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 416 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 416
 */
function isRequestedRangeNotSatisfiable(statusCode) {
  return validateHttpStatus(statusCode, 416);
}

export default isRequestedRangeNotSatisfiable;
