import { isOk } from '../../../src';

describe('Validators: isOk (type success)', () => {
  const STATUS_EXPECTED = 200;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isOk(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isOk(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
