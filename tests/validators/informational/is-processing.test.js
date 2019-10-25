import { isProcessing } from '../../../src';

describe('Validators: isProcessing (type informational)', () => {
  const STATUS_EXPECTED = 102;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isProcessing(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isProcessing(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
