import { validateHttpStatus } from '../src';

const STATUS_EXPECTED = 200;

describe('validateHttpStatus', () => {
  test('it should validate http status 200', () => {
    const received = validateHttpStatus(200, STATUS_EXPECTED);
    expect(received).toBeTruthy();
  });

  test('it should throw Error when wrong status be passed', () => {
    const received = validateHttpStatus(400, STATUS_EXPECTED);
    expect(received.message).toBe('Expected a 200 response.');
  });
});
