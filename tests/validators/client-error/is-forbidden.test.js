import { isForbidden } from '../../../src';

describe('Validators: isForbidden (type client error)', () => {
  const STATUS_EXPECTED = 403;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isForbidden(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isForbidden(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
