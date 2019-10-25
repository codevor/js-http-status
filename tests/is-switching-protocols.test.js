import { isSwitchingProtocols } from '../src';

describe('isSwitchingProtocols', () => {
  test('it should receive true when pass status 101', () => {
    expect(isSwitchingProtocols(101)).toBeTruthy();
  });

  test('it should throw Error when pass status different than 101', () => {
    const received = isSwitchingProtocols(300);
    expect(received.message).toBe('Expected a 101 response.');
  });
});
