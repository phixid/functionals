import { Either, fromNullable } from './control-flow';

import { randomNumberBetween1And10 } from '../../__tests__/utilities';

describe('Either container type: code branching', () => {
  let randomNumber = randomNumberBetween1And10();

  describe('output:', () => {
    it('branches to a Left when parameter is falsy', () => {
      expect(
        Either(0)
          .map(x => x + 1)
          .fold(() => 'error', x => x)
      ).toEqual('error');
    });

    it('branches to a Right when parameter is truthy', () => {
      expect(
        Either(randomNumber)
          .map(x => x + 1)
          .fold(() => 'error', x => x / 2)
      ).toEqual((randomNumber + 1) / 2);
    });
  });
});

describe('fromNullable', () => {
  it('returns a Left containing null when the parameter is null or undefined', () => {
    expect(fromNullable(null).inspect()).toEqual('Left(null)');
    expect(fromNullable(undefined).inspect()).toEqual('Left(null)');
  });

  it('returns a Right containing the passed value when not null or undefined', () => {
    expect(fromNullable(5).inspect()).toEqual('Right(5)');
  });
});
