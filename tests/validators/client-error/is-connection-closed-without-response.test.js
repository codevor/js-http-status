import { isConnectionClosedWithoutResponse } from '../../../src';

describe('Validators: isConflict (type client error)', () => {
  const STATUS_EXPECTED = 444;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isConnectionClosedWithoutResponse(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isConnectionClosedWithoutResponse(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
