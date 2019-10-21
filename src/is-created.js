import validateHttpStatus from './utils/validate-http-status';

/**
 * @module isCreated
 * @description
 * Validate HTTP Status code 201 type SUCCESS
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError} When the statusCode is different then 201
 */
function isCreated(statusCode) {
  return validateHttpStatus(statusCode, 201);
}

export default isCreated;
