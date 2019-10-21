import { isMovedPermanently } from '../src';

describe('isMovedPermanently', () => {
  test('it should receive true when pass status 301', () => {
    expect(isMovedPermanently(301)).toBeTruthy();
  });

  test('it should throw Error when pass status different than 301', () => {
    const received = isMovedPermanently(400);
    expect(received.message).toBe('Expected a 301 response.');
  });
});
