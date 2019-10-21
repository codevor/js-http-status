import { HTTPStatusError } from '../src';

describe('HTTPStatusError', () => {
  test('it should throw HTTPStatusError', () => {
    const errorThrow = () => {
      throw new HTTPStatusError('Invalid HTTP status code.');
    };
    expect(errorThrow).toThrow(HTTPStatusError);
  });
});
