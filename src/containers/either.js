// prettier-ignore
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
	chain: _ => Left(value),
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
  chain: f => f(value),
  fold: (_, successhandler) => successhandler(value),
  inspect: () => `Right(${value})`,
  map: f => Right(f(value))
});

/**
 * Either branches our code based on a parameter. If the parameter is truthy it will
 * branch to a Right, otherwise it will branch to a Left.
 *
 * @param value
 */

export const Either = value => (value ? Right(value) : Left(value));

/**
 * fromNullable branches our code based on a parameter. If the parameter is null or undefined it will
 * branch to a Left containing null, otherwise it will branch to a Right containing the value.
 *
 * @param value
 */

export const fromNullable = value => (value == null ? Left(null) : Right(value));
