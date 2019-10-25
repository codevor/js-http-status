import validateHttpStatus from '../validate-http-status';

/**
 * @module isMultipleChoices
 * @description
 * Validate HTTP Status code 300 type REDIRECTION
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Boolean}
 * @throws {HTTPStatusError}  When the statusCode is different then 300
 */
function isMultipleChoices(statusCode) {
  return validateHttpStatus(statusCode, 300);
}

export default isMultipleChoices;
