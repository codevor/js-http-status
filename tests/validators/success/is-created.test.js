import { isCreated } from '../../../src';

describe('Validators: isCreated (type success)', () => {
  const STATUS_EXPECTED = 201;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isCreated(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isCreated(300);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
