import { isClientClosedRequest } from '../../../src';

describe('Validators: isClientClosedRequest (type client error)', () => {
  const STATUS_EXPECTED = 499;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isClientClosedRequest(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isClientClosedRequest(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
