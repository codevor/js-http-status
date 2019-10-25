import { isNotModified } from '../../../src';

describe('Validators: isNotModified (type redirection)', () => {
  const STATUS_EXPECTED = 304;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isNotModified(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isNotModified(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
