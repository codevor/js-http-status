import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 424 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 424
 */
function isFailedDependency(statusCode) {
  return validateHttpStatus(statusCode, 424);
}

export default isFailedDependency;
