import { isNoContent } from '../../../src';

describe('Validators: isNoContent (type success)', () => {
  const STATUS_EXPECTED = 204;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isNoContent(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isNoContent(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
