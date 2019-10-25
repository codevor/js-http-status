import { isPermanentRedirect } from '../../../src';

describe('Validators: isPermanentRedirect (type redirection)', () => {
  const STATUS_EXPECTED = 308;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isPermanentRedirect(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isPermanentRedirect(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
