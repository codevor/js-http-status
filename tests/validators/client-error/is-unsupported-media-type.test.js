import { isUnsupportedMediaType } from '../../../src';

describe('Validators: isUnsupportedMediaType (type client error)', () => {
  const STATUS_EXPECTED = 415;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isUnsupportedMediaType(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isUnsupportedMediaType(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
