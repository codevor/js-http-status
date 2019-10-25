import { isProxyAuthenticationRequired } from '../../../src';

describe('Validators: isProxyAuthenticationRequired (type client error)', () => {
  const STATUS_EXPECTED = 407;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isProxyAuthenticationRequired(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isProxyAuthenticationRequired(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
