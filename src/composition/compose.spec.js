import { composeLeft, composeRight } from './compose';
import { isFunction } from '../../__tests__/testUtilities';
import {
  addOne,
  addOneToEach,
  double,
  doubleEach,
  randomNumberBetween1And10,
  toArray
} from '../../__tests__/utilities';

const mockFn = jest.fn();
const number1 = randomNumberBetween1And10();
const number2 = randomNumberBetween1And10();
const number3 = randomNumberBetween1And10();

describe('composeLeft: function composition from left to right', () => {
  it('is a function', () => {
    isFunction(composeLeft);
  });

  describe('input', () => {
    it('takes two parameters', () => {
      expect(composeLeft.length).toEqual(2);
    });
  });

  describe('output', () => {
    it('returns a function', () => {
      isFunction(composeLeft(mockFn, mockFn));
    });

    it('returned function applies functions from left to right', () => {
      let addOneAndDouble = composeLeft(double, addOne);
      expect(addOneAndDouble(number1)).toEqual(number1 * 2 + 1);
    });

    it('returned function takes multiple arguments', () => {
      let addOneAndDoubleEach = composeLeft(addOneToEach, doubleEach);
      let processNums = composeLeft(toArray, addOneAndDoubleEach);
      expect(processNums(number1, number2, number3)).toEqual([
        (number1 + 1) * 2,
        (number2 + 1) * 2,
        (number3 + 1) * 2
      ]);
    });
  });
});

describe('composeRight: function composition from right to left', () => {
  it('is a function', () => {
    isFunction(composeRight);
  });

  describe('input', () => {
    it('takes two parameters', () => {
      expect(composeRight.length).toEqual(2);
    });
  });

  describe('output', () => {
    it('returns a function', () => {
      isFunction(composeRight(mockFn, mockFn));
    });

    it('returned function applies functions from right to left', () => {
      let addOneAndDouble = composeRight(double, addOne);
      expect(addOneAndDouble(number1)).toEqual((number1 + 1) * 2);
    });

    it('returned function takes multiple arguments', () => {
      let addOneAndDoubleEach = composeRight(doubleEach, addOneToEach);
      let processNums = composeRight(addOneAndDoubleEach, toArray);
      expect(processNums(number1, number2, number3)).toEqual([
        (number1 + 1) * 2,
        (number2 + 1) * 2,
        (number3 + 1) * 2
      ]);
    });
  });
});
