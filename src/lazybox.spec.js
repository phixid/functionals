import { LazyBox } from './lazybox';
import { isFunction, resemblesBox } from '../__tests__/testUtils'

const mockFn = jest.fn();
const randomNumber = Math.floor(Math.random() * 10 + 1);
const giveRandomNumber = () => randomNumber;
const addOne = x => x + 1;
const double = x => x * 2;

describe('A LazyBox data type', () => {
  it('is a function', () => {
    isFunction(LazyBox);
  });

  describe('LazyBox inputs', () => {
    it('takes one parameter', () => {
      expect(LazyBox.length).toEqual(1);
    });
  });

  describe('LazyBox outputs', () => {
    const lazybox = LazyBox(mockFn);

    it('returns an object with two properties, map and fold', () => {
      expect(typeof lazybox).toEqual('object');
      expect(lazybox.map).toBeDefined();
      expect(lazybox.fold).toBeDefined();
    });

    describe('map', () => {
      it('is a function', () => {
        isFunction(lazybox.map);
      });

      it('takes one parameter (a function)', () => {
        expect(lazybox.map.length).toEqual(1);
      });

      it('returns a new LazyBox', () => {
        resemblesBox(lazybox.map(mockFn));
      });

      it('does not immediately evaluate the function composition of the map-parameter and the LazyBox-parameter', () => {
        lazybox.map(mockFn);
        expect(mockFn.mock.calls.length).toEqual(0);
      });
    });

    describe('fold', () => {
      it('is a function', () => {
        isFunction(lazybox.fold);
      });

      it('only applies the parameter function to the LazyBox function when using fold', () => {
        lazybox.fold(mockFn);
        expect(mockFn.mock.calls.length).toEqual(2);
      });

      it('executes functions from left to right', () => {
        expect(LazyBox(giveRandomNumber).map(addOne).map(double).fold(x => x)).toEqual((randomNumber + 1) * 2);
      });

      it('falls back to a default function to extract the current value from the LazyBox', () => {
        expect(LazyBox(giveRandomNumber).map(addOne).map(double).fold()).toEqual((randomNumber + 1) * 2);
      });
    });
  });
});