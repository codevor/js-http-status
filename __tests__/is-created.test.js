import isCreated from '../lib/is-created';

describe('isCreated', () => {
  test('it should test is created 200 status', () => {
    expect(isCreated(200)).toBeTruthy();
  });
});
