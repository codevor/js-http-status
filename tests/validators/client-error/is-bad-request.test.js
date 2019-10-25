import { isBadRequest } from '../../../src';

describe('Validators: isBadRequest (type client error)', () => {
  const STATUS_EXPECTED = 400;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isBadRequest(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isBadRequest(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
