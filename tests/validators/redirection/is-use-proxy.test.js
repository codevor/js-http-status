import { isUseProxy } from '../../../src';

describe('Validators: isSeeOther (type redirection)', () => {
  const STATUS_EXPECTED = 305;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isUseProxy(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isUseProxy(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
