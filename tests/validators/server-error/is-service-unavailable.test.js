import { isServiceUnavailable } from '../../../src';

describe('Validators: isServiceUnavailable (type server error)', () => {
  const STATUS_EXPECTED = 503;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isServiceUnavailable(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isServiceUnavailable(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
