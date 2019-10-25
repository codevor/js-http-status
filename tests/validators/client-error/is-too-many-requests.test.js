import { isTooManyRequests } from '../../../src';

describe('Validators: isTooManyRequests (type client error)', () => {
  const STATUS_EXPECTED = 429;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isTooManyRequests(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isTooManyRequests(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
