import { isAlreadyReported } from '../../../src';

describe('Validators: isAlreadyReported (type success)', () => {
  const STATUS_EXPECTED = 208;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isAlreadyReported(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isAlreadyReported(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
