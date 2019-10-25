import { isConflict } from '../../../src';

describe('Validators: isConflict (type client error)', () => {
  const STATUS_EXPECTED = 409;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isConflict(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isConflict(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
