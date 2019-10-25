import { isContinue } from '../../../src';

describe('Validators: isContinue (type informational)', () => {
  const STATUS_EXPECTED = 100;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isContinue(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isContinue(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
