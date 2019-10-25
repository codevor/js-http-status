import { isMovedPermanently } from '../../../src';

describe('Validators: isMovedPermanently (type redirection)', () => {
  const STATUS_EXPECTED = 301;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isMovedPermanently(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isMovedPermanently(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
