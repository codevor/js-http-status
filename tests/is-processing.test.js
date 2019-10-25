import { isProcessing } from '../src';

describe('isProcessing', () => {
  test('it should receive true when pass status 102', () => {
    expect(isProcessing(102)).toBeTruthy();
  });

  test('it should throw Error when pass status different than 102', () => {
    const received = isProcessing(300);
    expect(received.message).toBe('Expected a 102 response.');
  });
});
