import validateHttpStatus from './validate-http-status';

const EXPECTED_STATUS = 201;

function isCreated(status) {
  return validateHttpStatus(status, EXPECTED_STATUS);
}

export default isCreated;
