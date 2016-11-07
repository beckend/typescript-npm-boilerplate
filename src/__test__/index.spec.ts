/**
 * Main lib tests
 */
import { calcMe } from '../index';

describe('Main lib', () => {
  it('is computes', () => {
    expect(calcMe(10)).toEqual(20);
  });
});
