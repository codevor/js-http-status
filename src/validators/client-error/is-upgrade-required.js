import validateHttpStatus from '../validate-http-status';

/**
 * @module isUpgradeRequired
 * @description
 * Validate HTTP Status code 426 type CLIENT ERROR
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 426
 */
function isUpgradeRequired(statusCode) {
  return validateHttpStatus(statusCode, 426);
}

export default isUpgradeRequired;
