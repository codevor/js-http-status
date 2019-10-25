import { isNotImplemented } from '../../../src';

describe('Validators: isNotImplemented (type server error)', () => {
  const STATUS_EXPECTED = 501;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isNotImplemented(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isNotImplemented(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
