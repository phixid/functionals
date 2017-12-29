import { range } from './range';
import { isFunction } from '../../__tests__/testUtilities';

describe('Range', () => {
  it('is a function', () => {
    isFunction(range);
  });

  it('returns an iterable array', () => {
    expect(Array.isArray(range(2))).toEqual(true);
    expect(range(2).map(_ => 0)).toEqual([0, 0]);
  });

  describe('when called with one parameter', () => {
    it('returns an array starting with 0 up to but not including the parameter', () => {
      expect(range(5)).toEqual([0, 1, 2, 3, 4]);
    });
  });

  describe('when called with two parameters', () => {
    it('handles ranges that are positive', () => {
      expect(range(1, 5)).toEqual([1, 2, 3, 4]);
    });

    it('handles ranges that are negative', () => {
      expect(range(5, 1)).toEqual([5, 4, 3, 2]);
    });

    it('handles ranges with negative numbers', () => {
      expect(range(-5, -1)).toEqual([-5, -4, -3, -2]);
    });
  });
});
