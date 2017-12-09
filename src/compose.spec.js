import { compose } from './compose';
import { isFunction } from '../__tests__/testUtilities'
import { addOne, addOneToEach, double, doubleEach, randomNumberBetween1And10, toArray } from '../__tests__/utilities'

const mockFn = jest.fn();
const number1 = randomNumberBetween1And10();
const number2 = randomNumberBetween1And10();
const number3 = randomNumberBetween1And10();

describe('compose: function composition', () => {
  it('is a function', () => {
    isFunction(compose);
  });

  describe('input', () => {
    it('takes two parameters', () => {
      expect(compose.length).toEqual(2);
    });
  });

  describe('output', () => {
    it('returns a function', () => {
      isFunction(compose(mockFn, mockFn));
    });

    it('returned function applies functions from right to left', () => {
      let addOneAndDouble = compose(double, addOne);
      expect(addOneAndDouble(number1)).toEqual((number1 + 1) * 2);
    });

    it('returned function takes multiple arguments', () => {
      let addOneAndDoubleEach = compose(doubleEach, addOneToEach);
      let processNums = compose(addOneAndDoubleEach, toArray);
      expect(processNums(number1, number2, number3)).toEqual([(number1 + 1) * 2, (number2 + 1) * 2, (number3 + 1) * 2]);
    });
  });
});