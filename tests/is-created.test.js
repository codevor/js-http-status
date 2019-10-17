import { isCreated } from '../src';

describe('isCreated', () => {
  test('it should test isCreated status equal 201', () => {
    expect(isCreated(201)).toBeTruthy();
  });

  test('it should test isCreated status different then 200', () => {
    expect(isCreated(200)).toBeFalsy();
  });
});
