import { isInternalServerError } from '../../../src';

describe('Validators: isInternalServerError (type server error)', () => {
  const STATUS_EXPECTED = 500;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isInternalServerError(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isInternalServerError(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
