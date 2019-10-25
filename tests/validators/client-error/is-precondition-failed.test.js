import { isPreconditionFailed } from '../../../src';

describe('Validators: isPreconditionFailed (type client error)', () => {
  const STATUS_EXPECTED = 412;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isPreconditionFailed(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isPreconditionFailed(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
