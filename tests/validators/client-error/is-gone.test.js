import { isGone } from '../../../src';

describe('Validators: isGone (type client error)', () => {
  const STATUS_EXPECTED = 410;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isGone(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isGone(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
