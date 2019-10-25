import { isUpgradeRequired } from '../../../src';

describe('Validators: isUpgradeRequired (type client error)', () => {
  const STATUS_EXPECTED = 426;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isUpgradeRequired(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isUpgradeRequired(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
