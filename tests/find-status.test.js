import { findStatusByCode, findStatusByKey } from '../src';

describe('findStatus', () => {
  test('it should find HTTP status by code', () => {
    const found = findStatusByCode(200);
    const mockResponse = {
      code: 200,
      key: 'OK',
      message: 'OK',
      category: 'SUCCESS'
    };

    expect(found).toEqual(mockResponse);
  });

  test('it should find HTTP status by key', () => {
    const found = findStatusByKey('TOO_MANY_REQUESTS', 'key');
    const mockResponse = {
      code: 429,
      key: 'TOO_MANY_REQUESTS',
      message: 'Too Many Requests',
      category: 'CLIENT_ERROR'
    };

    expect(found).toEqual(mockResponse);
  });
});
