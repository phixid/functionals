/**
 * Left resembles a Box. Meaning it has a map, fold and inspect method.
 *
 * @param value
 *
 * Left.fold: takes two function parameters, applies the first one to the value.
 * Left.inspect: returns a string-template showing the value in a Left.
 * Left.map: takes a function parameter, returns itself.
 */

export const Left = value => ({
  fold: (errorhandler, _) => errorhandler(value),
  inspect: () => `Left(${value})`,
  map: _ => Left(value)
});

/**
 * Right resembles a Box. Meaning it has a map, fold and inspect method.
 *
 * @param value
 *
 * Right.fold: takes two function parameters, applies the second one to the value.
 * Right.inspect: returns a string-template showing the value in a Right.
 * Right.map: takes a function parameter, a new Right containing the function applied to the value.
 */

export const Right = value => ({
  fold: (_, successhandler) => successhandler(value),
  inspect: () => `Right(${value})`,
  map: f => Right(f(value))
});
