import { isNotAcceptable } from '../../../src';

describe('Validators: isNotAcceptable (type client error)', () => {
  const STATUS_EXPECTED = 406;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isNotAcceptable(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isNotAcceptable(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
