import { isMultipleChoices } from '../../../src';

describe('Validators: isMultipleChoices (type redirection)', () => {
  const STATUS_EXPECTED = 300;

  test(`it should receive true when pass status ${STATUS_EXPECTED}`, () => {
    expect(isMultipleChoices(STATUS_EXPECTED)).toBeTruthy();
  });

  test(`it should throw Error when pass status different than ${STATUS_EXPECTED}`, () => {
    const received = isMultipleChoices(304);
    expect(received.message).toBe(`Expected a ${STATUS_EXPECTED} response.`);
  });
});
