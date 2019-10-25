import { isAccepted } from '../../../src';

describe('Validators: isAccepted (type success)', () => {
  const STATUS_EXPECTED = 202;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isAccepted(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isAccepted(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
