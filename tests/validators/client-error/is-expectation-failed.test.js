import { isExpectationFailed } from '../../../src';

describe('Validators: isExpectationFailed (type client error)', () => {
  const STATUS_EXPECTED = 417;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isExpectationFailed(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isExpectationFailed(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
