import { isFailedDependency } from '../../../src';

describe('Validators: isFailedDependency (type client error)', () => {
  const STATUS_EXPECTED = 424;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isFailedDependency(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isFailedDependency(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
