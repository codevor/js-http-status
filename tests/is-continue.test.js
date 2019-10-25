import { isContinue } from '../src';

describe('isContinue', () => {
  test('it should receive true when pass status 100', () => {
    expect(isContinue(100)).toBeTruthy();
  });

  test('it should throw Error when pass status different than 100', () => {
    const received = isContinue(300);
    expect(received.message).toBe('Expected a 100 response.');
  });
});
