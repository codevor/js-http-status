import { isImTeapot } from '../../../src';

describe('Validators: isImTeapot (type client error)', () => {
  const STATUS_EXPECTED = 418;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isImTeapot(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isImTeapot(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
