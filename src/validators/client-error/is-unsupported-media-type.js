import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 415 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 415
 */
function isUnsupportedMediaType(statusCode) {
  return validateHttpStatus(statusCode, 415);
}

export default isUnsupportedMediaType;
