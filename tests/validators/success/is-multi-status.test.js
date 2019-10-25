import { isMultiStatus } from '../../../src';

describe('Validators: isMultiStatus (type success)', () => {
  const STATUS_EXPECTED = 207;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isMultiStatus(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isMultiStatus(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
