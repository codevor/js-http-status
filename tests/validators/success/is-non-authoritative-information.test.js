import { isNonAuthoritativeInformation } from '../../../src';

describe('Validators: isNonAuthoritativeInformation (type success)', () => {
  const STATUS_EXPECTED = 203;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isNonAuthoritativeInformation(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isNonAuthoritativeInformation(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
