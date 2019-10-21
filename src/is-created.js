import validateHttpStatus from './utils/validate-http-status';

/**
 * Validate HTTP Status code 201 type SUCCESS
 *
 * @param {integer} statusCode - The HTTP Status code
 * @throws {HTTPStatusError} Will throw an error if the @param {statusCode} is different then 201
 * @return {boolean}
 */
function isCreated(statusCode) {
  return validateHttpStatus(statusCode, 201);
}

export default isCreated;
