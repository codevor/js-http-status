import { isVariantAlsoNegotiates } from '../../../src';

describe('Validators: isVariantAlsoNegotiates (type server error)', () => {
  const STATUS_EXPECTED = 506;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isVariantAlsoNegotiates(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isVariantAlsoNegotiates(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
