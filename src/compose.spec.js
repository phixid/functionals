import { compose } from './compose';
import { isFunction } from '../__tests__/testUtils'

const mockFn = jest.fn();
const addOne = x => x + 1;
const addOneToEach = (numbers) => numbers.map(num => num + 1);
const double = x => x * 2;
const doubleEach = (numbers) => numbers.map(num => num * 2);
const toArray = (...args) => args;

describe('compose: function composition', () => {
  it('is a function', () => {
    isFunction(compose);
  });

  describe('compose inputs', () => {
    it('takes two parameters', () => {
      expect(compose.length).toEqual(2);
    });
  });

  describe('compose outputs', () => {
    it('returns a function', () => {
      isFunction(compose(mockFn, mockFn));
    });

    it('returned function applies functions from right to left', () => {
      let addOneAndDouble = compose(double, addOne);
      expect(addOneAndDouble(4)).toEqual(10);
    });

    it('returned function takes multiple arguments', () => {
      let addOneAndDoubleEach = compose(doubleEach, addOneToEach);
      let processNums = compose(addOneAndDoubleEach, toArray);
      expect(processNums(4, 5)).toEqual([10, 12]);
    });
  });
});