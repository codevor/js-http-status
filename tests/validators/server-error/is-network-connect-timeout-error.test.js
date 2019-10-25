import { isNetworkConnectTimeoutError } from '../../../src';

describe('Validators: isNetworkConnectTimeoutError (type server error)', () => {
  const STATUS_EXPECTED = 599;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isNetworkConnectTimeoutError(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isNetworkConnectTimeoutError(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
