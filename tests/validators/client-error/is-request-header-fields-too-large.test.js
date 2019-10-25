import { isRequestHeaderFieldsTooLarge } from '../../../src';

describe('Validators: isRequestHeaderFieldsTooLarge (type client error)', () => {
  const STATUS_EXPECTED = 431;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isRequestHeaderFieldsTooLarge(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isRequestHeaderFieldsTooLarge(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
