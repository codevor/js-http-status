import { isOk } from '../src';

describe('isOk', () => {
  test('it should receive true when pass status 200', () => {
    expect(isOk(200)).toBeTruthy();
  });

  test('it should throw Error when pass status different than 200', () => {
    const received = isOk(300);
    expect(received.message).toBe('Expected a 200 response.');
  });
});
