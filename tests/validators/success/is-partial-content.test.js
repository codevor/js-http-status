import { isPartialContent } from '../../../src';

describe('Validators: isPartialContent (type success)', () => {
  const STATUS_EXPECTED = 206;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isPartialContent(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isPartialContent(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
