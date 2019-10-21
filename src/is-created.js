import validateHttpStatus from './validate-http-status';

function isCreated(status) {
  const EXPECTED_STATUS = 201;
  return validateHttpStatus(status, EXPECTED_STATUS);
}

export default isCreated;
