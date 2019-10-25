import { isNetworkAuthenticationRequired } from '../../../src';

describe('Validators: isNetworkAuthenticationRequired (type server error)', () => {
  const STATUS_EXPECTED = 511;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isNetworkAuthenticationRequired(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isNetworkAuthenticationRequired(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
