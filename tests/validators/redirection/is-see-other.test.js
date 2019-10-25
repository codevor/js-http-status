import { isSeeOther } from '../../../src';

describe('Validators: isSeeOther (type redirection)', () => {
  const STATUS_EXPECTED = 303;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isSeeOther(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isSeeOther(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
