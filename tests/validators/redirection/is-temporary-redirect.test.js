import { isTemporaryRedirect } from '../../../src';

describe('Validators: isTemporaryRedirect (type redirection)', () => {
  const STATUS_EXPECTED = 307;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isTemporaryRedirect(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isTemporaryRedirect(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
