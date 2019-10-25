import { isNotFound } from '../../../src';

describe('Validators: isNotFound (type client error)', () => {
  const STATUS_EXPECTED = 404;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isNotFound(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isNotFound(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
