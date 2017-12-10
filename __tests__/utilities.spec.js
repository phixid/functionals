import {
  addOne,
  addOneToEach,
  double,
  doubleEach,
  minusFive,
  minusFiveEach,
  randomNumberBetween1And10
} from './utilities';
import { isFunction } from './testUtilities';

describe('addOne', () => {
  it('is a function', () => {
    isFunction(addOne);
  });

  describe('input', () => {
    it('takes one argument', () => {
      expect(addOne.length).toEqual(1);
    });
  });

  describe('output', () => {
    it('returns a number', () => {
      expect(typeof addOne(3)).toEqual('number');
    });

    it('adds one to a number', () => {
      expect(addOne(3)).toEqual(4);
    });

    it('handles negative numbers', () => {
      expect(addOne(-1)).toEqual(0);
    });
  });
});

describe('addOneToEach', () => {
  it('is a function', () => {
    isFunction(addOneToEach);
  });

  describe('input', () => {
    it('takes one argument', () => {
      expect(addOneToEach.length).toEqual(1);
    });
  });

  describe('output', () => {
    it('returns an array', () => {
      expect(Array.isArray(addOneToEach([1, 2]))).toEqual(true);
    });

    it('adds one to each number in an array', () => {
      expect(addOneToEach([0, 1, 2, 3, 4])).toEqual([1, 2, 3, 4, 5]);
    });

    it('handles negative numbers', () => {
      expect(addOneToEach([-2, -1, 0, 1, 2])).toEqual([-1, 0, 1, 2, 3]);
    });
  });
});

describe('double', () => {
  it('is a function', () => {
    isFunction(double);
  });

  describe('input', () => {
    it('takes one parameter', () => {
      expect(double.length).toEqual(1);
    });
  });

  describe('output', () => {
    it('returns a number', () => {
      expect(typeof double(4)).toEqual('number');
    });

    it('doubles a number', () => {
      expect(double(4)).toEqual(8);
    });

    it('handles negative numbers', () => {
      expect(double(-2)).toEqual(-4);
    });

    it('handles zero', () => {
      expect(double(0)).toEqual(0);
    });
  });
});

describe('doubleEach', () => {
  it('is a function', () => {
    isFunction(doubleEach);
  });

  describe('input', () => {
    it('takes one parameter', () => {
      expect(doubleEach.length).toEqual(1);
    });
  });

  describe('output', () => {
    it('returns an array', () => {
      expect(Array.isArray(doubleEach([4, 5]))).toEqual(true);
    });

    it('doubles each number in an array', () => {
      expect(doubleEach([2, 4, 6])).toEqual([4, 8, 12]);
    });

    it('handles negative numbers', () => {
      expect(doubleEach([-4, -3, -2])).toEqual([-8, -6, -4]);
    });

    it('handles zero', () => {
      expect(doubleEach([0, 0, 0])).toEqual([0, 0, 0]);
    });
  });
});

describe('minusFive', () => {
  it('is a function', () => {
    isFunction(minusFive);
  });

  describe('input', () => {
    it('takes one argument', () => {
      expect(minusFive.length).toEqual(1);
    });
  });

  describe('output', () => {
    it('returns a number', () => {
      expect(typeof minusFive(10)).toEqual('number');
    });

    it('adds one to a number', () => {
      expect(minusFive(10)).toEqual(5);
    });

    it('handles negative numbers', () => {
      expect(minusFive(-1)).toEqual(-6);
    });
  });
});

describe('minusFiveEach', () => {
  it('is a function', () => {
    isFunction(minusFiveEach);
  });

  describe('input', () => {
    it('takes one argument', () => {
      expect(minusFiveEach.length).toEqual(1);
    });
  });

  describe('output', () => {
    it('returns an array', () => {
      expect(Array.isArray(minusFiveEach([1, 2]))).toEqual(true);
    });

    it('adds one to each number in an array', () => {
      expect(minusFiveEach([10, 9, 8, 7, 6])).toEqual([5, 4, 3, 2, 1]);
    });

    it('handles negative numbers', () => {
      expect(minusFiveEach([-2, -1, 0, 1, 2])).toEqual([-7, -6, -5, -4, -3]);
    });
  });
});

describe('randomNumberBetween1And10', () => {
  it('is a function', () => {
    isFunction(randomNumberBetween1And10);
  });

  describe('output', () => {
    it('returns a number', () => {
      expect(typeof randomNumberBetween1And10()).toEqual('number');
    });

    it('number is bigger or equal to 1', () => {
      expect(randomNumberBetween1And10()).toBeGreaterThanOrEqual(1);
    });

    it('number is bigger or equal to 1', () => {
      expect(randomNumberBetween1And10()).toBeLessThanOrEqual(10);
    });
  });
});
