import { isInsufficientStorage } from '../../../src';

describe('Validators: isInsufficientStorage (type server error)', () => {
  const STATUS_EXPECTED = 507;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isInsufficientStorage(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isInsufficientStorage(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
