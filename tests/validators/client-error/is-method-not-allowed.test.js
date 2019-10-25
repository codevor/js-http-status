import { isMethodNotAllowed } from '../../../src';

describe('Validators: isMethodNotAllowed (type client error)', () => {
  const STATUS_EXPECTED = 405;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isMethodNotAllowed(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isMethodNotAllowed(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
