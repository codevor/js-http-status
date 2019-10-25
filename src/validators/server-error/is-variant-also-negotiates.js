import validateHttpStatus from '../validate-http-status';

/**
 * @module isVariantAlsoNegotiates
 * @description
 * Validate HTTP Status code 506 type SERVER ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 506
 */
function isVariantAlsoNegotiates(statusCode) {
  return validateHttpStatus(statusCode, 506);
}

export default isVariantAlsoNegotiates;
