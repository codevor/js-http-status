import validateHttpStatus from '../validate-http-status';

/**
 * @description
 * Validate HTTP Status code 599 type SERVER ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 599
 */
function isNetworkConnectTimeoutError(statusCode) {
  return validateHttpStatus(statusCode, 599);
}

export default isNetworkConnectTimeoutError;
