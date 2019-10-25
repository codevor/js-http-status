import { isRequestedRangeNotSatisfiable } from '../../../src';

describe('Validators: isRequestedRangeNotSatisfiable (type client error)', () => {
  const STATUS_EXPECTED = 416;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isRequestedRangeNotSatisfiable(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isRequestedRangeNotSatisfiable(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
