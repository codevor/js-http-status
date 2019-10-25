import { isPreconditionRequired } from '../../../src';

describe('Validators: isPreconditionRequired (type client error)', () => {
  const STATUS_EXPECTED = 428;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isPreconditionRequired(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isPreconditionRequired(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
