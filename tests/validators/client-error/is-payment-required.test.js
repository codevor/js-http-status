import { isPaymentRequired } from '../../../src';

describe('Validators: isPaymentRequired (type client error)', () => {
  const STATUS_EXPECTED = 402;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isPaymentRequired(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isPaymentRequired(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
