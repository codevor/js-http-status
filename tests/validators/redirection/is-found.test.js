import { isFound } from '../../../src';

describe('Validators: isFound (type redirection)', () => {
  const STATUS_EXPECTED = 302;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isFound(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isFound(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
