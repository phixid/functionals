import { pipeLeft, pipeRight } from './pipe';
import { isFunction } from '../__tests__/testUtilities';
import { addOne, double, minusFive } from '../__tests__/utilities';

describe('pipeLeft: multi-function composition from left to right', () => {
  it('is a function', () => {
    isFunction(pipeLeft);
  });

  describe('output', () => {
    it('composes functions from left to right', () => {
      let pipe = pipeLeft(addOne, double, minusFive, x => (x + 3) / 2);
      expect(pipe(5)).toEqual(5);
    });
  });
});

describe('pipeRight: multi-function composition from right to left', () => {
  it('is a function', () => {
    isFunction(pipeRight);
  });

  describe('output', () => {
    it('composes functions from right to left', () => {
      let pipe = pipeRight(x => (x + 11) / 2, addOne, double, minusFive);
      expect(pipe(6)).toEqual(7);
    });
  });
});
