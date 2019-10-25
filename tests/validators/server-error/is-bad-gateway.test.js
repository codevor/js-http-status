import { isBadGateway } from '../../../src';

describe('Validators: isBadGateway (type server error)', () => {
  const STATUS_EXPECTED = 502;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isBadGateway(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isBadGateway(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
