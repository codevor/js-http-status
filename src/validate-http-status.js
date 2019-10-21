function validateHttpStatus(status, expectedStatus) {
  try {
    const isValid = status === expectedStatus;

    if (!isValid) {
      throw new Error(`Expected a ${expectedStatus} response.`);
    }
    return isValid;
  } catch (e) {
    return e;
  }
}

export default validateHttpStatus;
