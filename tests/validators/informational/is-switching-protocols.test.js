import { isSwitchingProtocols } from '../../../src';

describe('Validators: isSwitchingProtocols (type informational)', () => {
  const STATUS_EXPECTED = 101;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isSwitchingProtocols(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isSwitchingProtocols(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
