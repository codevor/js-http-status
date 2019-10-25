import validateHttpStatus from '../validate-http-status';

/**
 * @module isPaymentRequired
 * @description
 * Validate HTTP Status code 402 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 402
 */
function isPaymentRequired(statusCode) {
  return validateHttpStatus(statusCode, 402);
}

export default isPaymentRequired;
