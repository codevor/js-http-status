import validateHttpStatus from '../validate-http-status';

/**
 * @module isPreconditionRequired
 * @description
 * Validate HTTP Status code 428 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 428
 */
function isPreconditionRequired(statusCode) {
  return validateHttpStatus(statusCode, 428);
}

export default isPreconditionRequired;
