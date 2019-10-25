import HTTP_STATUSES from '../../constants/http-statuses';

/**
 * @description
 * This method finds HTTP status by specified field
 *
 * @param {String/Integer} value - The HTTP Status value to filter
 * @param {String} field - Find by "code" or "key"
 * @return {Object}
 */
function findHttpStatus(value, field = 'code') {
  return HTTP_STATUSES.find(httpStatus => httpStatus[field] === value);
}

export default findHttpStatus;
