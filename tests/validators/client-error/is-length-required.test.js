import { isLengthRequired } from '../../../src';

describe('Validators: isLengthRequired (type client error)', () => {
  const STATUS_EXPECTED = 411;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isLengthRequired(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isLengthRequired(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
