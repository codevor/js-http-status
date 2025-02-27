import { isUnprocessableEntity } from '../../../src';

describe('Validators: isUnprocessableEntity (type client error)', () => {
  const STATUS_EXPECTED = 422;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isUnprocessableEntity(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isUnprocessableEntity(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
