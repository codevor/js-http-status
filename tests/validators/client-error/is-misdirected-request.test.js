import { isMisdirectedRequest } from '../../../src';

describe('Validators: isMisdirectedRequest (type client error)', () => {
  const STATUS_EXPECTED = 421;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isMisdirectedRequest(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isMisdirectedRequest(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
