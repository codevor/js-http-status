import { isResetContent } from '../../../src';

describe('Validators: isResetContent (type success)', () => {
  const STATUS_EXPECTED = 205;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isResetContent(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isResetContent(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
