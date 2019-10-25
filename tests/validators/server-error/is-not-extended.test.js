import { isNotExtended } from '../../../src';

describe('Validators: isNotExtended (type server error)', () => {
  const STATUS_EXPECTED = 510;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isNotExtended(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isNotExtended(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
