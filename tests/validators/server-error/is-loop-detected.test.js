import { isLoopDetected } from '../../../src';

describe('Validators: isLoopDetected (type server error)', () => {
  const STATUS_EXPECTED = 508;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isLoopDetected(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isLoopDetected(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
