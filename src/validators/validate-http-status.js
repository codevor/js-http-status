import HTTPStatusError from '../errors/http-status-error';

function validateHttpStatus(status, expectedStatus) {
  try {
    const isValid = status === expectedStatus;

    if (!isValid) {
      throw new HTTPStatusError(`Expected a ${expectedStatus} response.`);
    }
    return isValid;
  } catch (e) {
    return e;
  }
}

export default validateHttpStatus;
