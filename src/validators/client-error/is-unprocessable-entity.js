import validateHttpStatus from '../validate-http-status';

/**
 * @module isUnprocessableEntity
 * @description
 * Validate HTTP Status code 422 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 422
 */
function isUnprocessableEntity(statusCode) {
  return validateHttpStatus(statusCode, 422);
}

export default isUnprocessableEntity;
