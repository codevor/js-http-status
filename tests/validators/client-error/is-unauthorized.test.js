import { isUnauthorized } from '../../../src';

describe('isMovedPermanently', () => {
  test('it should receive true when pass status 401', () => {
    expect(isUnauthorized(401)).toBeTruthy();
  });

  test('it should throw Error when pass status different than 401', () => {
    const received = isUnauthorized(500);
    expect(received.message).toBe('Expected a 401 response.');
  });
});
