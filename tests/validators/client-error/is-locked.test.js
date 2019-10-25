import { isLocked } from '../../../src';

describe('Validators: isLocked (type client error)', () => {
  const STATUS_EXPECTED = 423;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isLocked(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isLocked(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
