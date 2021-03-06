import { LazyBox } from './lazybox';
import { resemblesBox } from '../../__tests__/testUtilities';
import { addOne, double, randomNumberBetween1And10 } from '../../__tests__/utilities';

const mockFn = jest.fn();
const randomNumber = randomNumberBetween1And10;
const giveRandomNumber = () => randomNumber;

describe('A LazyBox container type', () => {
  const lazybox = LazyBox(mockFn);

  it('returns an object with two properties, map and fold', () => {
    expect(typeof lazybox).toEqual('object');
    expect(lazybox.map).toBeDefined();
    expect(lazybox.fold).toBeDefined();
  });

  describe('map', () => {
    it('returns a new LazyBox', () => {
      resemblesBox(lazybox.map(mockFn));
    });

    it('does not immediately evaluate the function composition of the map-parameter and the LazyBox-parameter', () => {
      lazybox.map(mockFn);
      expect(mockFn.mock.calls.length).toEqual(0);
    });
  });

  describe('fold', () => {
    it('only applies the parameter function to the LazyBox function when using fold', () => {
      lazybox.fold(mockFn);
      expect(mockFn.mock.calls.length).toEqual(2);
    });

    it('executes functions from left to right', () => {
      expect(
        LazyBox(giveRandomNumber)
          .map(addOne)
          .map(double)
          .fold(x => x)
      ).toEqual((randomNumber + 1) * 2);
    });

    it('falls back to a default function to extract the current value from the LazyBox', () => {
      expect(
        LazyBox(giveRandomNumber)
          .map(addOne)
          .map(double)
          .fold()
      ).toEqual((randomNumber + 1) * 2);
    });
  });
});
