import { findHttpStatus } from '../src';

describe('findHttpStatus', () => {
  test('it should find http status by code', () => {
    const found = findHttpStatus(200);
    const mockResponse = {
      code: 200,
      key: 'OK',
      message: 'OK',
      category: 'SUCCESS'
    };

    expect(found).toEqual(mockResponse);
  });

  test('it should find http status by key', () => {
    const found = findHttpStatus('TOO_MANY_REQUESTS', 'key');
    const mockResponse = {
      code: 429,
      key: 'TOO_MANY_REQUESTS',
      message: 'Too Many Requests',
      category: 'CLIENT_ERROR'
    };

    expect(found).toEqual(mockResponse);
  });
});
