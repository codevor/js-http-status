import { isRequestUriTooLong } from '../../../src';

describe('Validators: isRequestUriTooLong (type client error)', () => {
  const STATUS_EXPECTED = 414;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isRequestUriTooLong(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isRequestUriTooLong(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
