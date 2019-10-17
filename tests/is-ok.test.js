import { isOk } from '../src';

describe('isOk', () => {
  test('it should test isOk status equal 200', () => {
    expect(isOk(200)).toBeTruthy();
  });

  test('it should test isOk status different then 201', () => {
    expect(isOk(201)).toBeFalsy();
  });
});
