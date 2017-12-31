import { Box } from './box';
import { resemblesBox } from '../../__tests__/testUtilities';
import { addOne, double, randomNumberBetween1And10 } from '../../__tests__/utilities';

const randomNumber = randomNumberBetween1And10();

describe('A Box container type', () => {
  const box = Box(randomNumber);

  it('returns an object with three properties (map, fold, inspect)', () => {
    expect(typeof box).toEqual('object');
    expect(box.map).toBeDefined();
    expect(box.fold).toBeDefined();
    expect(box.inspect).toBeDefined();
  });

  describe('Box.map', () => {
    it('returns a new box', () => {
      resemblesBox(box.map(x => x));
    });

    it('inside the new box it applies the function parameter to the box-value', () => {
      let mockFn = jest.fn();
      box.map(mockFn);
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toBeCalledWith(randomNumber);
    });
  });

  describe('Box.fold', () => {
    it('returns the application of the function (parameter) to the box-value', () => {
      expect(box.fold(addOne)).toEqual(randomNumber + 1);
    });

    it('falls back to a default function to extract the current value from the LazyBox', () => {
      expect(
        Box(randomNumber)
          .map(addOne)
          .map(double)
          .fold()
      ).toEqual((randomNumber + 1) * 2);
    });
  });

  describe('Box.inspect', () => {
    it('returns the current value in a `Box(${})`-template', () => {
      expect(box.inspect()).toEqual(`Box(${randomNumber})`);
    });
  });
});
