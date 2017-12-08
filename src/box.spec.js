import { Box } from './box';
import { isFunction, resemblesBox } from '../__tests__/testUtils'

const randomNumber = Math.floor(Math.random() * 10 + 1);
const addOne = x => x + 1;
const double = x => x * 2;

describe('A Box data type', () => {
  it('is a function', () => {
    isFunction(Box)
  });

  describe('Box inputs', () => {
    it('takes a single parameter', () => {
      expect(Box.length).toEqual(1);
    });
  });

  describe('Box outputs', () => {
    const box = Box(randomNumber);

    it('returns an object with three properties (map, fold, inspect)', () => {
      expect(typeof box).toEqual('object');
      expect(box.map).toBeDefined();
      expect(box.fold).toBeDefined();
      expect(box.inspect).toBeDefined();
    });

    describe('map', () => {
      it('is a function', () => {
        isFunction(box.map);
      });

      it('takes one parameter (a function)', () => {
        expect(box.map.length).toEqual(1);
      });

      it('returns a new box', () => {
        resemblesBox(box.map(x => x))
      });

      it('inside the new box it applies the function parameter to the box-value', () => {
        let mockFn = jest.fn();
        box.map(mockFn)
        expect(mockFn).toHaveBeenCalledTimes(1);
        expect(mockFn).toBeCalledWith(randomNumber);
      });
    });

    describe('fold', () => {
      it('is a function', () => {
        isFunction(box.fold);
      });

      it('returns the application of the function (parameter) to the box-value', () => {
        expect(box.fold(addOne)).toEqual(randomNumber + 1);
      });

      it('falls back to a default function to extract the current value from the LazyBox', () => {
        expect(Box(randomNumber).map(addOne).map(double).fold()).toEqual((randomNumber + 1) * 2);
      });
    });

    describe('inspect', () => {
      it('is a function', () => {
        isFunction(box.inspect)
      });

      it('takes no arguments', () => {
        expect(box.inspect.length).toEqual(0);
      });

      it('returns the current value in a `Box(${})`-template', () => {
        expect(box.inspect()).toEqual(`Box(${randomNumber})`);
      });
    });
  });
});