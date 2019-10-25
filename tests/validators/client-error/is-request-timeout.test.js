import { isRequestTimeout } from '../../../src';

describe('Validators: isRequestTimeout (type client error)', () => {
  const STATUS_EXPECTED = 408;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isRequestTimeout(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isRequestTimeout(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
