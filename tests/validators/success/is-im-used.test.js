import { isImUsed } from '../../../src';

describe('Validators: isImUsed (type success)', () => {
  const STATUS_EXPECTED = 226;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isImUsed(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isImUsed(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
