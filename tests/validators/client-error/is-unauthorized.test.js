import { isUnauthorized } from '../../../src';

describe('Validators: isUnauthorized (type client error)', () => {
  const STATUS_EXPECTED = 401;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isUnauthorized(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isUnauthorized(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
