import { isHttpVersionNotSupported } from '../../../src';

describe('Validators: isBadGateway (type server error)', () => {
  const STATUS_EXPECTED = 505;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isHttpVersionNotSupported(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isHttpVersionNotSupported(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
