import findStatus from '.';

/**
 * @description
 * This method finds HTTP status by code
 *
 * @param {Integer} statusCode - The HTTP Status code
 * @return {Object}
 */
function findStatusByCode(statusCode) {
  return findStatus(statusCode);
}

export default findStatusByCode;
