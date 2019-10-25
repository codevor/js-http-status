import { isGatewayTimeout } from '../../../src';

describe('Validators: isGatewayTimeout (type server error)', () => {
  const STATUS_EXPECTED = 504;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isGatewayTimeout(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isGatewayTimeout(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
