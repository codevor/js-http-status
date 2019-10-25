import { isPayloadTooLarge } from '../../../src';

describe('Validators: isPayloadTooLarge (type client error)', () => {
  const STATUS_EXPECTED = 413;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isPayloadTooLarge(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isPayloadTooLarge(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
