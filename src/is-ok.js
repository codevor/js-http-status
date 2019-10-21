import validateHttpStatus from './utils/validate-http-status';

/**
 * Validate HTTP Status code 200 type SUCCESS
 *
 * @param {integer} statusCode - The HTTP Status code
 * @throws {HTTPStatusError} Will throw an error if the @param {statusCode} is different then 200
 * @return {boolean}
 */
function isOk(statusCode) {
  return validateHttpStatus(statusCode, 200);
}

export default isOk;
