import HTTP_STATUSES from '../../constants/http-statuses';

function findHttpStatus(value, field = 'code') {
  return HTTP_STATUSES.find(httpStatus => httpStatus[field] === value);
}

export default findHttpStatus;
