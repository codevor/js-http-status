import { isCreated } from '../src';

describe('isCreated', () => {
  test('it should receive true when pass status 201', () => {
    expect(isCreated(201)).toBeTruthy();
  });

  test('it should throw Error when pass status different than 201', () => {
    const received = isCreated(300);
    expect(received.message).toBe('Expected a 201 response.');
  });
});
