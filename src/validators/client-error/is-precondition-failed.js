import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 412 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 412
 */
function isPreconditionFailed(statusCode) {
  return validateHttpStatus(statusCode, 412);
}

export default isPreconditionFailed;
